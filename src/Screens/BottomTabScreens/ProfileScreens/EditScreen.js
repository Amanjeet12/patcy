import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackChecker from '../../../../components/BackChecker';
import image from '../../../../constant/image';
import {WhiteCamera} from '../../SvgComponent/Logocomponent';
import CommonContainer from '../../../../components/CommonContainer';
import FlagContainer from '../../../../components/FlagContainer';
import Button from '../../../../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EditScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <BackChecker placeholder={'Edit Profile'} />
          <View style={{alignItems: 'center'}}>
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
              <TouchableOpacity
                style={styles.cameraContainer}
                activeOpacity={1}>
                <WhiteCamera />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={styles.title}>What’s your pet’s name?</Text>
            <View style={{marginTop: SIZES.width * 0.013}}>
              <CommonContainer placeholder={'Enter your name'} />
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={styles.title}>Email Address</Text>
            <View style={{marginTop: SIZES.width * 0.013}}>
              <CommonContainer placeholder={'Enter Email address'} />
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={styles.title}>Mobile No</Text>
            <View style={{marginTop: SIZES.width * 0.026}}>
              <FlagContainer />
            </View>
          </View>
          <View style={{marginTop: SIZES.width * 0.064, marginBottom: SIZES.width * 0.13}}>
            <Button placeholder={'Update'} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.041,
  },
  imageContainer: {
    width: SIZES.width * 0.18,
    height: SIZES.width * 0.18,
    borderRadius: 32,
  },
  cameraContainer: {
    position: 'absolute',
    width: SIZES.width * 0.064,
    height: SIZES.width * 0.064,
    borderRadius: 32,
    backgroundColor: '#D92A12',
    borderWidth: 2,
    borderColor: '#fff',
    bottom: -SIZES.width * 0.013,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {marginTop: SIZES.width * 0.051},
  title: {
    color: '#8C8C8C',
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
});
