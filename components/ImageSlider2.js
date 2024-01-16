/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {SIZES} from '../constant/theme';

const ImageSlider2 = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const totalImages = images.length;
  const imageWidth = SIZES.width / 2;
  const imageHeight = SIZES.width * 0.31;
  const spacing = SIZES.width * 0.026;
  const paddingRightForFirstImage = SIZES.width * 0.041;

  return (
    <View style={styles.sliderContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentOffset={{x: imageWidth + spacing, y: 0}} // Set initial content offset to show the second image
        onMomentumScrollEnd={event => {
          const newIndex = Math.floor(
            event.nativeEvent.contentOffset.x / (imageWidth + spacing),
          );
          setCurrentIndex(newIndex);
        }}>
        {images.map(({id, image, title, description, color}, index) => (
          <View
            key={id}
            style={{
              width: SIZES.width * 0.54,
              marginLeft: index === 0 ? paddingRightForFirstImage : spacing,
              marginRight:
                index === totalImages - 1 ? paddingRightForFirstImage : spacing,
              //   backgroundColor: '#000',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                width: '100%',
                height: SIZES.width * 0.31,
                backgroundColor: color,
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: '60%',
                  height: '100%',
                  padding: SIZES.width * 0.026,
                  justifyContent: 'center',
                }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
              </View>
            </View>

            <View
              style={{
                width: SIZES.width * 0.26,
                height: SIZES.width * 0.382,
                position: 'absolute',
                bottom: 0,
                right: 0,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Image
                source={image}
                style={{
                  width: SIZES.width * 0.26,
                  height: '100%',
                  borderRadius: 10,
                  resizeMode: 'cover',
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    height: SIZES.width * 0.382,
    position: 'relative',
    marginTop: SIZES.width * 0.026,
  },
  image: {
    borderRadius: 10,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.width * 0.026,
  },
  title: {
    color: '#252525',
    fontSize: SIZES.width * 0.051,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: 'Visby-Medium',
  },
  description: {
    fontFamily: 'Visby-Medium',
    color: '#3A3A3A',
    fontSize: SIZES.width * 0.026,
    textAlign: 'left',
    marginTop: SIZES.width * 0.013,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.039,
  },
});

export default ImageSlider2;
