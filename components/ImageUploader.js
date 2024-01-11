import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '../constant/image';

const ImageUploader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={image.Uploader}
        style={{width: 60, height: 60, resizeMode: 'contain'}}
      />
      <Text style={styles.title}>Add Photo</Text>
    </View>
  );
};

export default ImageUploader;

const styles = StyleSheet.create({
  container: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#8C8C8C',
    alignItems: 'center',
    fontSize: 10,
    fontWeight: '600',
    paddingTop: 10,
    fontFamily: 'Visby-Medium',
  },
});
