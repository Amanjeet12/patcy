/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HomeScreenBackButton from '../../../../components/HomeScreenComponent/HomeScreenBackButton';
import HomeScreenBigImageSlider from '../../../../components/HomeScreenComponent/HomeScreenBigImageSlider';
import {BigSlider, BigSliderG} from '../../../../constant/data';
import {Location, RedLocation, Star} from '../../SvgComponent/Logocomponent';
import UnLike from 'react-native-vector-icons/FontAwesome';
import Like from 'react-native-vector-icons/FontAwesome';
import HomeScreenDateSelecter from '../../../../components/HomeScreenComponent/HomeScreenDateSelecter';
import PetSize from '../../../../components/PetSize';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import HomeBottomContainer from '../../../../components/HomeScreenComponent/HomeBottomContainer';
import BottomPriceChecker from '../../../../components/HomeScreenComponent/BottomPriceChecker';
import HomeScreenSingleDateSelecter from '../../../../components/HomeScreenComponent/HomeScreenSingleDateSelecter';

const GroomingInnerScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedService = route.params?.selectedService || null;
  const [active, setActive] = useState('active');

  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = [
    '10:00 AM',
    '12:00 PM',
    '2:00 PM',
    '4:00 PM',
    '6:00 PM',
    '8:00 PM',
    '10:00 PM',
    '12:00 AM',
    '2:00 AM',
    '4:00 AM',
    '6:00 AM',
  ];

  const handleTimeSelection = time => {
    setSelectedTime(time);
  };
  const handleLikeToggle = item => {
    setActive(item);
  };

  const handleNavigation = () => {
    navigation.navigate('SelectServiceForGroomComponent');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <HomeScreenBackButton
          placeholder={''}
          screen={'View Appointments'}
          title={'AppointmentScreen'}
        />
        <View>
          <HomeScreenBigImageSlider data={BigSliderG} />
        </View>
        <View style={styles.nameContainer}>
          <View style={{gap: 3.5}}>
            <Text style={[styles.title, {width: '80%'}]}>
              Paw Peace Domestic Pets Grooming
            </Text>
            <View style={styles.flexBox}>
              <Text style={[styles.description, {color: '#1EAD24'}]}>open</Text>
              <Text style={[styles.description, {color: '#8C8C8C'}]}>
                Timing:{' '}
                <Text style={styles.description}>Mon - Sat, 8am - 8pm</Text>
              </Text>
            </View>
            <View style={[styles.flexBox, {paddingTop: 3}]}>
              <RedLocation />
              <Text style={[styles.description, {color: '#8C8C8C'}]}>
                34 Al Marija St - Al Jubail - Sharjah
              </Text>
            </View>
          </View>
          <View style={[styles.whiteContainer, {height: 55}]}>
            <View style={styles.flexBox}>
              <Star />
              <Text style={styles.description}>5.0</Text>
            </View>
            <Text style={[styles.description, {fontSize: 10}]}>
              150 Reviews
            </Text>
          </View>
        </View>
        <View style={styles.typeContainer}>
          <View style={styles.flexBox}>
            <Text style={styles.description}>Type:</Text>
            <Text
              style={[
                styles.title,
                {
                  fontSize: 10,
                  lineHeight: 25,
                  paddingHorizontal: 10,
                  borderWidth: 0.5,
                  borderColor: '#FFC6C6',
                  borderRadius: 7,
                  backgroundColor: '#fff',
                },
              ]}>
              In-store Grooming{' '}
            </Text>
          </View>
          <View>
            {active === 'active' ? (
              <UnLike
                name="heart"
                size={20}
                color={'#F84040'}
                onPress={() => handleLikeToggle('Inactive')}
              />
            ) : (
              <Like
                name="heart-o"
                size={20}
                color={'#F84040'}
                onPress={() => handleLikeToggle('active')}
              />
            )}
          </View>
        </View>
        <View style={styles.bookingDateContainer}>
          <Text
            style={[styles.description, {color: '#8C8C8C', marginBottom: 10}]}>
            Booking Date
          </Text>
          <HomeScreenSingleDateSelecter />
          <View
            style={{
              backgroundColor: '#fff',
              marginTop: -5,
              paddingBottom: 10,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={[
                styles.description,
                {
                  color: '#8C8C8C',
                  marginBottom: 10,
                  paddingLeft: 5,
                  fontSize: 10,
                },
              ]}>
              Available Date
            </Text>
            <View style={styles.container3}>
              {timeSlots.map((time, index) => (
                <View key={index} style={styles.timeSlotContainer}>
                  {time === '4:00 PM' || time === '6:00 PM' ? (
                    <View
                      style={[styles.timeSlot, {backgroundColor: '#E2E2E2'}]}>
                      {/* You can customize this text or remove it if not needed */}
                      <Text style={styles.timeText}>{time}</Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() => handleTimeSelection(time)}
                      style={[
                        styles.timeSlot,
                        {
                          backgroundColor:
                            selectedTime === time ? '#FF6347' : '#fff',
                        },
                      ]}
                      disabled={false}>
                      <Text
                        style={[
                          styles.timeText,
                          {color: selectedTime === time ? '#fff' : '#000'},
                        ]}>
                        {time}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.bookingDateContainer}>
          <Text
            style={[styles.description, {color: '#8C8C8C', marginBottom: 10}]}>
            Boarding Service
          </Text>
          <View style={styles.container2}>
            <TouchableOpacity
              style={styles.coloeContainer}
              onPress={() => handleNavigation()}>
              <Icon name="options" size={20} color={'#212121'} />
              <Text style={styles.text}>
                {selectedService ? selectedService.name : `Select Service`}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <HomeBottomContainer />
          </View>
        </View>
      </ScrollView>
      <View>
        <BottomPriceChecker data={selectedService} />
      </View>
    </SafeAreaView>
  );
};

export default GroomingInnerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  nameContainer: {
    paddingHorizontal: 16,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#121212',
    fontFamily: 'VisbyRound-Bold',
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  flexBox: {flexDirection: 'row', alignItems: 'center', gap: 10},
  whiteContainer: {
    alignItems: 'center',
    gap: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  typeContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookingDateContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  container2: {
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  coloeContainer: {
    height: 35,
    backgroundColor: '#eaeaea',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    color: '#212121',
  },
  bottomContainer: {
    marginTop: 20,
  },
  container3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlotContainer: {
    marginVertical: 5,
  },
  timeSlot: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginLeft: 5,
    borderWidth: 0.5,
    borderColor: '#FFC6C6',
  },
  timeText: {
    fontFamily: 'Visby-Medium',
    color: '#212121',
    fontSize: 10,
  },
});