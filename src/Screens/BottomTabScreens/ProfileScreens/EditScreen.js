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
            <View style={{marginTop: 5}}>
              <CommonContainer placeholder={'Enter your name'} />
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={styles.title}>Email Address</Text>
            <View style={{marginTop: 5}}>
              <CommonContainer placeholder={'Enter Email address'} />
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={styles.title}>Mobile No</Text>
            <View style={{marginTop: 10}}>
              <FlagContainer />
            </View>
          </View>
          <View style={{marginTop: 25, marginBottom: 50}}>
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
    paddingHorizontal: 16,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 32,
  },
  cameraContainer: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 32,
    backgroundColor: '#D92A12',
    borderWidth: 2,
    borderColor: '#fff',
    bottom: -5,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {marginTop: 20},
  title: {
    color: '#8C8C8C',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
});
