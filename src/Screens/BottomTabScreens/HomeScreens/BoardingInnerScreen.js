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
import {BigSlider} from '../../../../constant/data';
import {RedLocation, Star} from '../../SvgComponent/Logocomponent';
import UnLike from 'react-native-vector-icons/FontAwesome';
import Like from 'react-native-vector-icons/FontAwesome';
import HomeScreenDateSelecter from '../../../../components/HomeScreenComponent/HomeScreenDateSelecter';
import PetSize from '../../../../components/PetSize';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import HomeBottomContainer from '../../../../components/HomeScreenComponent/HomeBottomContainer';
import BottomPriceChecker from '../../../../components/HomeScreenComponent/BottomPriceChecker';

const BoardingInnerScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedService = route.params?.selectedService || null;
  console.log(selectedService);

  const [active, setActive] = useState('active');
  const handleLikeToggle = item => {
    setActive(item);
  };

  const handleNavigation = () => {
    navigation.navigate('SelectServiceComponent');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <HomeScreenBackButton
          placeholder={''}
          screen={'View Booking'}
          title={'AppointmentScreen'}
        />
        <View>
          <HomeScreenBigImageSlider data={BigSlider} />
        </View>
        <View style={styles.nameContainer}>
          <View style={{gap: 3.5}}>
            <Text style={styles.title}>Churchwoods Pet Daycare</Text>
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
                Alansri Street 13, Plot M35,
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
                  fontSize: 12,
                  lineHeight: 25,
                  paddingHorizontal: 10,
                  borderWidth: 0.5,
                  borderColor: '#FFC6C6',
                  borderRadius: 7,
                  backgroundColor: '#fff',
                },
              ]}>
              Weekly Booking
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
          <HomeScreenDateSelecter />
        </View>
        <View style={styles.bookingDateContainer}>
          <Text
            style={[styles.description, {color: '#8C8C8C', marginBottom: 10}]}>
            Pet Size
          </Text>
          <PetSize />
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

export default BoardingInnerScreen;

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
});
