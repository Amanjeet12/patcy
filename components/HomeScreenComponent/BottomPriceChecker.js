/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant/theme';
import {useNavigation} from '@react-navigation/native';

const BottomPriceChecker = ({data}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('CheckoutScreen');
  };
  return (
    <View
      style={[
        styles.container,
        {height: data ? SIZES.width * 0.26 : SIZES.width * 0.205},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        {data ? (
          <Text style={[styles.buttonText, {color: '#000'}]}>Total Bill</Text>
        ) : null}
        {data ? (
          <Text style={[styles.buttonText, {color: COLORS.btn}]}>
            {data.price}
          </Text>
        ) : null}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: data ? COLORS.btn : '#C0C0C0',
          },
        ]}
        onPress={() => handleNavigation()}
        disabled={!data}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.26,
    backgroundColor: '#fff',
    paddingHorizontal: SIZES.width * 0.041,
    gap: SIZES.width * 0.026,
    paddingTop: SIZES.width * 0.026,
  },
  button: {
    height: SIZES.width * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.width * 0.026,
    padding: SIZES.width * 0.026,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
  },
});
export default BottomPriceChecker;
