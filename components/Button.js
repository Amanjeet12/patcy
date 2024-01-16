import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant/theme';
import {useNavigation} from '@react-navigation/native';

const Button = ({placeholder, screen}) => {
  const navigation = useNavigation();
  const handleNavigation = screen => {
    screen ? navigation.navigate(screen) : null;
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleNavigation(screen)}>
      <Text style={styles.buttonText}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: SIZES.width * 0.13,
    backgroundColor: COLORS.btn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: SIZES.width * 0.026,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
});
