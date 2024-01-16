/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {COLORS, SIZES} from '../constant/theme';

const OtpContainer = () => {
  const [otp, setOtp] = useState('');
  return (
    <View>
      <OTPInputView
        style={{
          width: '100%',
          height: SIZES.width * 0.128,
          // alignSelf: 'center',
        }}
        pinCount={4}
        codeInputFieldStyle={{
          ...styles.underlineStyleBase,
          fontSize: 18, // Adjust the font size as needed
        }}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          setOtp(code);
        }}
      />
    </View>
  );
};

export default OtpContainer;

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: SIZES.width * 0.15,
    height: SIZES.width * 0.15,
    borderWidth: 0.5,
    borderRadius: 9,
    borderColor: '#EAEAEA',
    color: '#000',
    backgroundColor: '#EAEAEA',
    fontSize: SIZES.width * 0.041, // Initial font size
  },

  underlineStyleHighLighted: {
    borderColor: '#D92A12',
    borderWidth: 1,
  },
});
