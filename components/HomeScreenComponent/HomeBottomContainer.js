/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import image from '../../constant/image';
import {SIZES} from '../../constant/theme';

const HomeBottomContainer = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.boxContainer}>
          <Text style={styles.text}>Boarding Center Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boxContainer, {width: '48%'}]}>
          <Text style={[styles.text, {backgroundColor: '#fff'}]}>Offers</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bookingDateContainer}>
        <Text
          style={[
            styles.description,
            {color: '#8C8C8C', marginBottom: SIZES.width * 0.026},
          ]}>
          Details
        </Text>
        <View
          style={{
            backgroundColor: '#fff',
            padding: SIZES.width * 0.039,
            borderRadius: 10,
          }}>
          <Text
            style={[
              styles.description,
              {
                fontSize: SIZES.width * 0.026,
                color: '#8C8C8C',
                lineHeight: SIZES.width * 0.041,
              },
            ]}>
            PAWPEACE is a full-service animal care facility dedicated to
            consistently providing high customer satisfaction by rendering
            excellent service, quality pet care, and furnishing a fun, clean,
            enjoyable atmosphere at an acceptable price. We will maintain a
            friendly creative work environment which respects diversity, ideas.
            Read more...
          </Text>
        </View>
        <View style={styles.bookingDateContainer}>
          <Text
            style={[
              styles.description,
              {color: '#8C8C8C', marginBottom: SIZES.width * 0.026},
            ]}>
            Location
          </Text>
          <Text
            style={[
              styles.description,
              {color: '#000', marginBottom: SIZES.width * 0.026},
            ]}>
            34 Al Marija St - Al Jubail - Sharjah - United Arab Emirates{' '}
          </Text>
          <View>
            <Image
              source={image.Map}
              style={{width: '100%', height: 150, resizeMode: 'cover'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeBottomContainer;

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.width * 0.051,
    marginTop: 1,
  },
  boxContainer: {
    height: SIZES.width * 0.115,
    backgroundColor: '#fff',
    width: '52%',
    justifyContent: 'center',
    padding: SIZES.width * 0.009,
  },
  text: {
    fontSize: SIZES.width * 0.026,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    color: '#212121',
    backgroundColor: '#FFC6C6',
    paddingHorizontal: SIZES.width * 0.0893,
    textAlign: 'center',
    paddingVertical: SIZES.width * 0.026,
    borderRadius: 5,
  },
  description: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  bookingDateContainer: {
    marginTop: SIZES.width * 0.051,
  },
});
