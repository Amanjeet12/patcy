import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SIZES} from '../constant/theme';

const ImageSlider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const totalImages = images.length;
  const imageWidth = SIZES.width / 2; // Set the width of each image
  const imageHeight = SIZES.width * 0.28; // Set the height of each image
  const spacing = SIZES.width * 0.026; // Set the spacing between two images
  const paddingRightForFirstImage = SIZES.width * 0.041; // Set the right padding for the first image

  return (
    <View style={styles.sliderContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={event => {
          const newIndex = Math.floor(
            event.nativeEvent.contentOffset.x / (imageWidth + spacing),
          );
          setCurrentIndex(newIndex);
        }}>
        {images.map(({id, image, title, description}, index) => (
          <View
            key={id}
            style={{
              marginLeft: index === 0 ? paddingRightForFirstImage : spacing,
              marginRight:
                index === totalImages - 1 ? paddingRightForFirstImage : spacing,
            }}>
            <Image
              source={image}
              style={[styles.image, {width: imageWidth, height: imageHeight}]}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
              style={styles.gradient}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
              </View>
            </LinearGradient>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    height: SIZES.width * 0.28,
    position: 'relative',
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
    color: 'white',
    fontSize: SIZES.width * 0.036,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: 'Visby-Medium',
  },
  description: {
    fontFamily: 'Visby-Medium',
    color: 'white',
    fontSize: SIZES.width * 0.031,
    textAlign: 'left',
    marginTop: SIZES.width * 0.013,
  },
});

export default ImageSlider;
