/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/theme';
import {useNavigation} from '@react-navigation/native';

const BottomPriceChecker = ({data}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('CheckoutScreen');
  };
  return (
    <View style={[styles.container, {height: data ? 100 : 80}]}>
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
    height: 100,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    gap: 10,
    paddingTop: 10,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
  },
});
export default BottomPriceChecker;
