/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

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
              marginRight: index === totalImages - 1 ? 16 : 10,
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
    paddingHorizontal: 16,
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 10,
  },
});
