/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {SIZES} from '../../constant/theme';

const HomeScreenBigImageSlider = ({data}) => {
  const totalImages = data.length;
  console.log(data);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.scrollView]}>
        {data.map((item, index) => (
          <View
            key={item.id}
            style={{
              marginRight:
                index === totalImages - 1
                  ? SIZES.width * 0.041
                  : SIZES.width * 0.026,
            }}>
            <Image
              key={item.id}
              source={item.image} // Replace with your image source
              style={styles.image}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreenBigImageSlider;

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.width * 0.041,
  },
  image: {
    width: SIZES.width * 0.78,
    height: SIZES.width * 0.64,
    resizeMode: 'cover',
    marginRight: SIZES.width * 0.026,
    borderRadius: 10,
  },
});
