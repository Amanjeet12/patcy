import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constant/theme';
import image from '../../../constant/image';
import Button from '../../../components/Button';

const IntroScreen = () => {
  // console.log(SIZES.height * 0.5);
  return (
    <SafeAreaView style={styles.container}>
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
      </View>
      <View style={styles.buttonContainer}>
        <Button placeholder={'Get Started'} screen={'OnboardingScreen'} />
      </View>
    </SafeAreaView>
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
    marginHorizontal: SIZES.width * 0.041,
  },
  title: {
    color: COLORS.primary,
    fontSize: SIZES.width * 0.09,
    fontWeight: '500',
    lineHeight: SIZES.width * 0.09,
    fontFamily: 'Visby-Regular',
    letterSpacing:0.4
  },
  description: {
    color: COLORS.black,
    fontSize: SIZES.width * 0.036,
    fontWeight: '300',
    lineHeight: SIZES.width * 0.057,
    fontFamily: 'Visby-Regular',
    marginTop: SIZES.width * 0.049,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: SIZES.height * 0.5,
    overflow: 'hidden',
    marginTop: SIZES.width * 0.077,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderBottomLeftRadius: Platform.OS === 'ios' ? 180 : 200,
    borderBottomRightRadius: Platform.OS === 'ios' ? 180 : 200,
  },
  buttonContainer: {
    // marginHorizontal: SIZES.width * 0.041,
    marginTop: SIZES.width * 0.13,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: SIZES.width * 0.041,
    bottom: Platform.OS == 'ios' ? 30 : 20,
  },
});
