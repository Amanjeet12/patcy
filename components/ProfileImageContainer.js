import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '../constant/image';

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
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 32,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 15,
    color: '#121212',
    fontFamily: 'Visby-Medium',
    paddingTop: 10,
  },
  description: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 9,
    color: '#8C8C8C',
    fontFamily: 'Visby-Medium',
    paddingTop: 5,
  },
});
