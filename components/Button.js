import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constant/theme';
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
    height: 50,
    backgroundColor: COLORS.btn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
});
