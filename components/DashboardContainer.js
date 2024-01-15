/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import image from '../constant/image';
import {BellIcon} from '../src/Screens/SvgComponent/Logocomponent';
import {useNavigation} from '@react-navigation/native';

const DashboardContainer = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{width: '20%'}}>
        <Image
          source={image.Profile}
          style={{width: 60, height: 60, resizeMode: 'cover', borderRadius: 32}}
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
          height: 54,
          alignItems: 'center',
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
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 25,
    fontFamily: 'Visby-Medium',
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'Visby-Medium',
    paddingTop: 5,
    color: '#fff',
  },
});
