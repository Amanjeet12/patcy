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

const SupportProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.flexBox}>
        <View style={styles.innerContainer}>
          <Application />
          <Text style={styles.title}>How application works</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <Arrow />
        </View>
      </TouchableOpacity>
      <View style={styles.Border}></View>
      <TouchableOpacity style={styles.flexBox}>
        <View style={styles.innerContainer}>
          <Support />
          <Text style={styles.title}>Support & FAQ</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <Arrow />
        </View>
      </TouchableOpacity>
      <View style={styles.Border}></View>

      {/* <View style={styles.Border} /> */}
      <TouchableOpacity style={styles.flexBox}>
        <View style={styles.innerContainer}>
          <FAQ />
          <Text style={styles.title}>Give us feedback</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <Arrow />
        </View>
      </TouchableOpacity>
      <View style={styles.Border}></View>

      {/* <View style={styles.Border} /> */}
      <TouchableOpacity
        style={styles.flexBox}
        onPress={() => navigation.navigate('AboutScreen')}>
        <View style={styles.innerContainer}>
          <Aboutus />
          <Text style={styles.title}>About us</Text>
        </View>
        <View style={{paddingRight: 10}}>
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
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
  },
  Border: {
    height: 0.5,
    backgroundColor: '#8C8C8C',
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    marginVertical: 3,
  },
  innerContainer: {flexDirection: 'row', alignItems: 'center', gap: 10},
  title: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 14,
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
});
