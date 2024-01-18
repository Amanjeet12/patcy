import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Aboutus,
  Application,
  Arrow,
  ChangePassword,
  FAQ,
  Notifications,
  PetcyProfile,
  SubscriptionProfile,
  Support,
} from '../src/Screens/SvgComponent/Logocomponent';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../constant/theme';

const SupportProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.flexBox}>
        <View style={styles.innerContainer}>
          <Application />
          <Text style={styles.title}>How application works</Text>
        </View>
        <View style={{paddingRight: SIZES.width * 0.026}}>
          <Arrow />
        </View>
      </TouchableOpacity>
      <View style={styles.Border}></View>
      <TouchableOpacity style={styles.flexBox}>
        <View style={styles.innerContainer}>
          <Support />
          <Text style={styles.title}>Support & FAQ</Text>
        </View>
        <View style={{paddingRight: SIZES.width * 0.026}}>
          <Arrow />
        </View>
      </TouchableOpacity>
      <View style={styles.Border}></View>
      <TouchableOpacity style={styles.flexBox}>
        <View style={styles.innerContainer}>
          <FAQ />
          <Text style={styles.title}>Give us feedback</Text>
        </View>
        <View style={{paddingRight: SIZES.width * 0.026}}>
          <Arrow />
        </View>
      </TouchableOpacity>
      <View style={styles.Border}></View>
      <TouchableOpacity
        style={styles.flexBox}
        onPress={() => navigation.navigate('AboutScreen')}>
        <View style={styles.innerContainer}>
          <Aboutus />
          <Text style={styles.title}>About us</Text>
        </View>
        <View style={{paddingRight: SIZES.width * 0.026}}>
          <Arrow />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SupportProfile;

const styles = StyleSheet.create({
  container: {
    // height: 190,
    backgroundColor: '#fff',
    marginTop: SIZES.width * 0.026,
    borderRadius: 10,
    padding: SIZES.width * 0.013,
    paddingHorizontal: SIZES.width * 0.026,
  },
  Border: {
    height: 0.5,
    backgroundColor: '#8C8C8C',
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: SIZES.width * 0.0893,
    marginVertical: 3,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.width * 0.026,
  },
  title: {
    fontSize: SIZES.width * 0.026,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.036,
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
});
