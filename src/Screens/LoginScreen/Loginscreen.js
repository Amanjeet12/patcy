/* eslint-disable react/self-closing-comp */
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FlagContainer from '../../../components/FlagContainer';
import image from '../../../constant/image';
import Button from '../../../components/Button';
import {COLORS, SIZES} from '../../../constant/theme';
import {useNavigation} from '@react-navigation/native';

const SignInButton = ({placeholder, logo, screen}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.boxContainer}
      onPress={() => (screen ? navigation.navigate(screen) : null)}>
      <Image
        source={logo}
        style={{
          width: SIZES.width * 0.041,
          height: SIZES.width * 0.049,
          resizeMode: 'contain',
        }}
      />
      <Text style={styles.boxTitle}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

const Loginscreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.title}>Let’s sign you in</Text>
            <Text style={styles.description}>
              Login to your account by mobile number
            </Text>
          </View>
          <View style={styles.flagBox}>
            <FlagContainer />
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <SignInButton
              placeholder={'Continue with Google'}
              logo={image.Google}
            />
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <SignInButton
              placeholder={'Continue with Apple'}
              logo={image.Apple}
            />
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <SignInButton
              placeholder={'Continue with mail'}
              logo={image.Mail}
              screen={'MailAuthScreen'}
            />
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Button placeholder={'Get OTP'} screen={'OtpScreen'} />
          </View>
          <TouchableOpacity
            style={{marginTop: SIZES.width * 0.3, alignItems: 'center'}}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.createTitle}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    marginTop: SIZES.width * 0.33,
    marginHorizontal: SIZES.width * 0.041,
  },
  title: {
    color: '#121212',
    fontSize: SIZES.width * 0.062,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  description: {
    color: '#121212',
    fontSize: SIZES.width * 0.031,
    fontWeight: '300',
    fontFamily: 'Visby-Medium',
    paddingTop: SIZES.width * 0.026,
  },
  flagBox: {
    marginTop: SIZES.width * 0.102,
  },
  boxContainer: {
    width: '100%',
    height: SIZES.width * 0.128,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#FFC6C6',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: SIZES.width * 0.026,
  },
  boxTitle: {
    fontSize: SIZES.width * 0.026,
    color: '#000',
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  createTitle: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
    color: '#F84040',
  },
});
