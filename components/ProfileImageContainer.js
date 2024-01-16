import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '../constant/image';
import {SIZES} from '../constant/theme';

const ProfileImageContainer = () => {
  return (
    <View style={styles.containner}>
      <View style={styles.imageContainer}>
        <Image
          source={image.Profile}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 32,
          }}
        />
      </View>
      <Text style={styles.title}>Kairav Paulson</Text>
      <Text style={styles.description}>kairavpaulson12@gmail.com</Text>
    </View>
  );
};

export default ProfileImageContainer;

const styles = StyleSheet.create({
  containner: {
    height: SIZES.width * 0.382,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: SIZES.width * 0.18,
    height: SIZES.width * 0.18,
    borderRadius: 32,
  },
  title: {
    fontSize: SIZES.width * 0.041,
    fontWeight: '500',
    lineHeight: SIZES.width * 0.039,
    color: '#121212',
    fontFamily: 'Visby-Medium',
    paddingTop: SIZES.width * 0.026,
  },
  description: {
    fontSize: SIZES.width * 0.026,
    fontWeight: '500',
    lineHeight: SIZES.width * 0.026,
    color: '#8C8C8C',
    fontFamily: 'Visby-Medium',
    paddingTop: SIZES.width * 0.013,
  },
});
