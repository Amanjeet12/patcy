/* eslint-disable react/no-unstable-nested-components */
import {
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS, SIZES} from '../../../constant/theme';
import {slides} from '../../../constant/data';
import {useNavigation} from '@react-navigation/native';
import {Circle, G, Svg} from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign';

const OnboardingScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const navigation = useNavigation();
  const size = SIZES.width * 0.24;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * SIZES.width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      navigation.replace('Loginscreen');
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * SIZES.width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const desiredOffsets = [33, 66, 100];

  const getDesiredOffset = () => {
    if (currentSlideIndex < desiredOffsets.length) {
      return desiredOffsets[currentSlideIndex];
    }
    return 0;
  };

  const offset = getDesiredOffset();

  const Slide = ({item}) => {
    return (
      <View
        style={[styles.mainContainer, {backgroundColor: item.backgroundColor}]}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
      </View>
    );
  };

  const Middle = () => {
    const getColorStyle = (word, specialColor, specialWord) => {
      return {
        color:
          word.toLowerCase() === specialWord.toLowerCase()
            ? specialColor
            : '#000',
        fontWeight:
          word.toLowerCase() === specialWord.toLowerCase() ? 'bold' : 'normal',
      };
    };

    return (
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          {slides.map((item, index) => (
            <View
              key={index}
              style={{height: '100%', justifyContent: 'center'}}>
              {currentSlideIndex === index && (
                <Text style={styles.title}>
                  {item.title.split(' ').map((word, wordIndex, wordsArray) => (
                    <Text
                      key={wordIndex}
                      style={getColorStyle(word, '#FF0000', item.specialWord)}>
                      {word} {wordIndex < wordsArray.length - 1 ? '' : ''}
                    </Text>
                  ))}
                </Text>
              )}
            </View>
          ))}
        </View>
        <View style={[styles.titleContainer, {marginTop: 28}]}>
          {slides.map((item, index) => (
            <View
              key={index}
              style={{height: '100%', justifyContent: 'center'}}>
              {currentSlideIndex === index && (
                <Text style={styles.description}>{item.description}</Text>
              )}
            </View>
          ))}
        </View>
        <View style={styles.indicatorContainer}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: 'red',
                  width: 8,
                  height: 8,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={skip}>
          <Text style={[styles.title, {fontSize: 16, color: COLORS.primary}]}>
            Skip
          </Text>
        </TouchableOpacity>
        <View style={styles.svgContainer}>
          <Svg width={size} height={size}>
            <G rotation="-90" origin={center}>
              <Circle
                stroke={'#fff'}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
              />
              <Circle
                stroke={'#FFAB9F'}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={
                  circumference - (circumference * offset) / 100
                }
                fill={'#fff'}
              />
            </G>
          </Svg>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={goToNextSlide}
            style={styles.btn}>
            <Icon name="right" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={{flex: 0.5}}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          bounces={false}
          renderItem={({item}) => <Slide item={item} />}
        />
      </View>
      <View style={{flex: 0.5}}>
        <Middle />
        <Footer />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    width: SIZES.width,
    height: SIZES.height / 2.07,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    left: 50,
    right: 50,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
    bottom: 0,
    position: 'absolute',
  },
  textContainer: {
    paddingHorizontal: 16,
    marginTop: 55,
  },
  titleContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: '#E1F0ED',
    marginHorizontal: 3,
    borderRadius: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 31,
    fontFamily: 'Visby-Medium',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: 'Visby-Medium',
    textAlign: 'center',
    color: '#000',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '10%',
    alignItems: 'center',
    marginTop: 28,
    gap: 10,
  },
  btn: {
    position: 'absolute',
    width: SIZES.width * 0.211,
    height: SIZES.width * 0.211,
    borderRadius: SIZES.width * 0.13,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: SIZES.width * 0.15,
    height: SIZES.height * 0.05,
    width: SIZES.width,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  svgContainer: {
    position: 'absolute',
    right: SIZES.width * 0.051,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
