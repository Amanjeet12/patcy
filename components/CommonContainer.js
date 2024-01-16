import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {SIZES} from '../constant/theme';

const CommonContainer = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder ? placeholder : 'username@example.com'}
        style={{
          fontFamily: 'Visby-Medium',
          fontSize: SIZES.width * 0.026,
          fontWeight: '600',
          color: '#000',
        }}
        placeholderTextColor={'#8C8C8C'}
      />
    </View>
  );
};

export default CommonContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SIZES.width * 0.128,
    backgroundColor: '#EAEAEA',
    borderWidth: 0.5,
    borderColor: '#8C8C8C',
    marginTop: SIZES.width * 0.013,
    justifyContent: 'center',
    paddingHorizontal: SIZES.width * 0.039,
    paddingVertical: SIZES.width * 0.013,
    borderRadius: SIZES.width * 0.026,
  },
});
