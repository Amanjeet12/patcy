/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '../constant/image';
import {SIZES} from '../constant/theme';

const ImageUploader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={image.Uploader}
        style={{
          width: SIZES.width * 0.153,
          height: SIZES.width * 0.153,
          resizeMode: 'contain',
        }}
      />
      <Text style={styles.title}>Add Photo</Text>
    </View>
  );
};

export default ImageUploader;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.332,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#8C8C8C',
    alignItems: 'center',
    fontSize: SIZES.width * 0.026,
    fontWeight: '600',
    paddingTop: SIZES.width * 0.026,
    fontFamily: 'Visby-Medium',
  },
});
