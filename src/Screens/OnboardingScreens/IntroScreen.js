import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constant/theme';
import image from '../../../constant/image';
import Button from '../../../components/Button';

const IntroScreen = () => {
  console.log(SIZES.width * 0.64);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to{'\n'}petcare</Text>
          <Text style={styles.description}>
            All types of services for your pet in one{'\n'}place, instantly
            searchable
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={image.Dog} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <Button placeholder={'Get Started'} screen={'OnboardingScreen'} />
        </View>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    marginTop: SIZES.width * 0.141,
  },
  textContainer: {
    marginHorizontal: 16,
  },
  title: {
    color: COLORS.primary,
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 36,
    fontFamily: 'Visby-Medium',
  },
  description: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Visby-Medium',
    marginTop: 19,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 400,
    overflow: 'hidden',
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  buttonContainer: {
    marginHorizontal: 16,
    marginTop: 50,
  },
});
