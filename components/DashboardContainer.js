/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import image from '../constant/image';
import {BellIcon} from '../src/Screens/SvgComponent/Logocomponent';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../constant/theme';

const DashboardContainer = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{width: '20%'}}>
        <Image
          source={image.Profile}
          style={{
            width: SIZES.width * 0.153,
            height: SIZES.width * 0.153,
            resizeMode: 'cover',
            borderRadius: 32,
          }}
        />
      </View>
      <View style={{width: '70%'}}>
        <Text style={styles.title}>Welcome Kairav</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.description}>your total saving</Text>
          <Text style={[styles.title, {marginTop: 3}]}> 1,205.00</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '10%',
          height: SIZES.width * 0.14,
          alignItems: 'center',
          justifyContent:'center'
        }}
        onPress={() => Navigation.navigate('NotificationScreen')}>
        <BellIcon />
      </TouchableOpacity>
    </View>
  );
};

export default DashboardContainer;

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 120  : SIZES.width * 0.382,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: SIZES.width * 0.057,
    fontWeight: '700',
    lineHeight: SIZES.width * 0.064,
    fontFamily: 'Visby-Medium',
    textAlign: 'left',
  },
  description: {
    fontSize: SIZES.width * 0.036,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.051,
    fontFamily: 'Visby-Medium',
    paddingTop: SIZES.width * 0.013,
    color: '#fff',
  },
});
