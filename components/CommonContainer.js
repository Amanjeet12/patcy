import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CommonContainer = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder ? placeholder : 'username@example.com'}
        style={{
          fontFamily: 'Visby-Medium',
          fontSize: 10,
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
    height: 49,
    backgroundColor: '#EAEAEA',
    borderWidth: 0.5,
    borderColor: '#8C8C8C',
    marginTop: 5,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
