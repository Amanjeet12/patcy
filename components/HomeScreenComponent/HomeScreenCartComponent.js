/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from '../Button';
import {Backbutton} from '../../src/Screens/SvgComponent/Logocomponent';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../constant/theme';

const HomeScreenCartComponent = ({placeholder, icon, screen, title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: SIZES.width * 0.044,
        }}>
        <TouchableOpacity
          style={styles.whiteButton}
          onPress={() => navigation.goBack()}>
          <Backbutton />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{placeholder ? placeholder : null}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: SIZES.width * 0.051,
        }}>
        <TouchableOpacity onPress={() => console.log('enter')}>
          <Text style={styles.textContainer}>{screen}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewOrderScreen')}>
          <Image
            source={icon}
            style={{
              width: SIZES.width * 0.054,
              height: SIZES.width * 0.039,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreenCartComponent;

const styles = StyleSheet.create({
  maincontainer: {
    height: SIZES.width * 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.width * 0.041,
    justifyContent: 'space-between',
  },
  whiteButton: {
    width: SIZES.width * 0.077,
    height: SIZES.width * 0.077,
    borderRadius: 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#121212',
    fontSize: SIZES.width * 0.041,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
  },
  textContainer: {
    fontFamily: 'Visby-Medium',
    fontSize: SIZES.width * 0.026,
    fontWeight: '500',
    color: '#000',
    padding: SIZES.width * 0.026,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#D52C17',
  },
});
