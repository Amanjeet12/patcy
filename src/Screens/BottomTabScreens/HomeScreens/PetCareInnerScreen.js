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
import {BigSlider, BigSliderC} from '../../../../constant/data';
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

const PetCareInnerScreen = () => {
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
  ];

  const handleTimeSelection = time => {
    setSelectedTime(time);
  };
  const handleLikeToggle = item => {
    setActive(item);
  };

  const handleNavigation = () => {
    navigation.navigate('SelectServiceForCareComponent');
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
          <HomeScreenBigImageSlider data={BigSliderC} />
        </View>
        <View style={styles.nameContainer}>
          <View style={{gap: 3.5}}>
            <Text style={styles.title}>Aloropi Vet Center (Dogs & Cats)</Text>
            <View style={styles.flexBox}>
              <Text style={[styles.description, {color: '#1EAD24'}]}>open</Text>
              <Text style={[styles.description, {color: '#8C8C8C'}]}>
                Timing:{' '}
                <Text style={styles.description}>Mon - Sat, 8am - 8pm</Text>
              </Text>
            </View>
            <View style={styles.flexBox}>
              <RedLocation />
              <Text
                style={[styles.description, {color: '#8C8C8C', paddingTop: 3}]}>
                34 Al Marija St - Al Jubail - Sharjah
              </Text>
            </View>
          </View>
          <View style={[styles.whiteContainer, {height: SIZES.width * 0.141}]}>
            <View style={styles.flexBox}>
              <Star />
              <Text style={styles.text}>5.0</Text>
            </View>
            <Text style={[styles.description, {fontSize: SIZES.width * 0.026}]}>
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
                  fontSize: SIZES.width * 0.031,
                  lineHeight: SIZES.width * 0.064,
                  paddingHorizontal: SIZES.width * 0.026,
                  borderWidth: 0.5,
                  borderColor: '#FFC6C6',
                  borderRadius: 7,
                  backgroundColor: '#fff',
                },
              ]}>
              Clinic visit
            </Text>
            <Text
              style={[
                styles.title,
                {
                  fontSize: SIZES.width * 0.031,
                  lineHeight: SIZES.width * 0.064,
                  paddingHorizontal: SIZES.width * 0.026,
                  borderWidth: 0.5,
                  borderColor: '#FFC6C6',
                  borderRadius: 7,
                  backgroundColor: '#fff',
                },
              ]}>
              Home visit
            </Text>
          </View>
          <View>
            {active === 'active' ? (
              <UnLike
                name="heart"
                size={16}
                color={'#F84040'}
                onPress={() => handleLikeToggle('Inactive')}
              />
            ) : (
              <Like
                name="heart-o"
                size={SIZES.width * 0.041}
                color={'#F84040'}
                onPress={() => handleLikeToggle('active')}
              />
            )}
          </View>
        </View>
        <View style={styles.bookingDateContainer}>
          <Text
            style={[styles.description, {color: '#8C8C8C', marginBottom: SIZES.width * 0.026}]}>
            Booking Date
          </Text>
          <HomeScreenSingleDateSelecter />
          <View
            style={{
              backgroundColor: '#fff',
              marginTop: -SIZES.width * 0.013,
              paddingBottom: SIZES.width * 0.026,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              paddingHorizontal: SIZES.width * 0.026,
            }}>
            <Text
              style={[
                styles.description,
                {
                  color: '#8C8C8C',
                  marginBottom: SIZES.width * 0.026,
                  paddingLeft: SIZES.width * 0.013,
                  fontSize: SIZES.width * 0.026,
                },
              ]}>
              Available Date
            </Text>
            <View style={styles.container3}>
              {timeSlots.map((time, index) => (
                <View key={index} style={styles.timeSlotContainer}>
                  {time === '2:00 PM' || time === '6:00 PM' ? (
                    <View
                      style={[styles.timeSlot, {backgroundColor: '#E2E2E2'}]}>
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
            style={[styles.description, {color: '#8C8C8C', marginBottom: SIZES.width * 0.026}]}>
            Boarding Service
          </Text>
          <View style={styles.container2}>
            <TouchableOpacity
              style={styles.coloeContainer}
              onPress={() => handleNavigation()}>
              <Icon name="options" size={SIZES.width * 0.051} color={'#212121'} />
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

export default PetCareInnerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  nameContainer: {
    paddingHorizontal: SIZES.width * 0.041,
    marginTop: SIZES.width * 0.039,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: SIZES.width * 0.041,
    fontWeight: '600',
    color: '#121212',
    fontFamily: 'VisbyRound-Bold',
  },
  description: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  flexBox: {flexDirection: 'row', alignItems: 'center', gap: SIZES.width * 0.026},
  whiteContainer: {
    alignItems: 'center',
    gap: SIZES.width * 0.013,
    padding: SIZES.width * 0.026,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  typeContainer: {
    paddingHorizontal: SIZES.width * 0.041,
    marginTop: SIZES.width * 0.051,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookingDateContainer: {
    paddingHorizontal: SIZES.width * 0.041,
    marginTop: SIZES.width * 0.051,
  },
  container2: {
    height: SIZES.width * 0.18,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: SIZES.width * 0.036,
  },
  coloeContainer: {
    height: SIZES.width * 0.0893,
    backgroundColor: '#eaeaea',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.width * 0.039,
    paddingHorizontal: SIZES.width * 0.026,
    borderRadius: 8,
  },
  text: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    color: '#212121',
  },
  bottomContainer: {
    marginTop: SIZES.width * 0.051,
  },
  container3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlotContainer: {
    marginVertical: SIZES.width * 0.013,
  },
  timeSlot: {
    paddingVertical: SIZES.width * 0.013,
    paddingHorizontal: SIZES.width * 0.026,
    borderRadius: 8,
    marginLeft: SIZES.width * 0.013,
    borderWidth: 0.5,
    borderColor: '#FFC6C6',
  },
  timeText: {
    fontFamily: 'Visby-Medium',
    color: '#212121',
    fontSize: SIZES.width * 0.026,
  },
});
