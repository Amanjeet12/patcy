/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import image from '../constant/image';
import Icon from 'react-native-vector-icons/Entypo';
import {Search} from '../src/Screens/SvgComponent/Logocomponent';
import {SIZES} from '../constant/theme';

const Searchbar = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.imageContainer}>
        <Search />
      </View>
      <View style={{width: '80%'}}>
        <TextInput
          placeholder="Search for a pet product or center"
          keyboardType="default"
          maxLength={10}
          style={{
            color: '#000',
            fontSize: SIZES.width * 0.031,
            fontWeight: '600',
            fontFamily: 'Visby-Medium',
          }}
          placeholderTextColor={'#9F9F9F'}
        />
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: SIZES.width * 0.102,
    borderWidth: 0.3,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    borderColor: '#8C8C8C',
    paddingHorizontal: SIZES.width * 0.039,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    width: '10%',
    alignItems: 'center',
    gap: SIZES.width * 0.026,
  },
});
