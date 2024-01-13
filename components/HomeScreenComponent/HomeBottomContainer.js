import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import image from '../../constant/image';

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
          style={[styles.description, {color: '#8C8C8C', marginBottom: 10}]}>
          Details
        </Text>
        <View style={{backgroundColor: '#fff', padding: 15, borderRadius: 10}}>
          <Text
            style={[
              styles.description,
              {fontSize: 10, color: '#8C8C8C', lineHeight: 16},
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
            style={[styles.description, {color: '#8C8C8C', marginBottom: 10}]}>
            Location
          </Text>
          <Text style={[styles.description, {color: '#000', marginBottom: 10}]}>
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
    marginBottom: 20,
    marginTop: 1,
  },
  boxContainer: {
    height: 45,
    backgroundColor: '#fff',
    width: '52%',
    justifyContent: 'center',
    padding: 3,
  },
  text: {
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    color: '#212121',
    backgroundColor: '#FFC6C6',
    paddingHorizontal: 35,
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  bookingDateContainer: {
    marginTop: 20,
  },
});
