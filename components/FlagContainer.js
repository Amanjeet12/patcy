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
import {SIZES} from '../constant/theme';

const FlagContainer = () => {
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={image.Flag}
          style={{
            width: SIZES.width * 0.067,
            height: SIZES.width * 0.044,
            resizeMode: 'cover',
          }}
        />
        <Icon name="chevron-small-down" size={20} color={'#8C8C8C'} />
      </TouchableOpacity>
      <View style={{width: '80%'}}>
        <TextInput
          placeholder="Enter your mobile number"
          keyboardType="number-pad"
          maxLength={10}
          style={{
            color: '#000',
            fontSize: SIZES.width * 0.026,
            fontWeight: '600',
            fontFamily: 'Visby-Medium',
          }}
          placeholderTextColor={'#8C8C8C'}
        />
      </View>
    </View>
  );
};

export default FlagContainer;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: SIZES.width * 0.129,
    borderWidth: 0.3,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    borderColor: '#8C8C8C',
    paddingHorizontal: SIZES.width * 0.039,
    paddingVertical: SIZES.width * 0.013,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    width: '20%',
    alignItems: 'center',
    gap: SIZES.width * 0.026,
  },
});
