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
import {COLORS} from '../../../constant/theme';
import {useNavigation} from '@react-navigation/native';

const SignInButton = ({placeholder, logo, screen}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.boxContainer}
      onPress={() => (screen ? navigation.navigate(screen) : null)}>
      <Image
        source={logo}
        style={{width: 16, height: 19, resizeMode: 'contain'}}
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
          <View style={{marginTop: 20}}>
            <SignInButton
              placeholder={'Continue with Google'}
              logo={image.Google}
            />
          </View>
          <View style={{marginTop: 20}}>
            <SignInButton
              placeholder={'Continue with Apple'}
              logo={image.Apple}
            />
          </View>
          <View style={{marginTop: 20}}>
            <SignInButton
              placeholder={'Continue with mail'}
              logo={image.Mail}
              screen={'MailAuthScreen'}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Button placeholder={'Get OTP'} screen={'OtpScreen'} />
          </View>
          <TouchableOpacity
            style={{marginTop: 100, alignItems: 'center'}}
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
    marginTop: 128,
    marginHorizontal: 16,
  },
  title: {
    color: '#121212',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  description: {
    color: '#121212',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
    paddingTop: 10,
  },
  flagBox: {
    marginTop: 40,
  },
  boxContainer: {
    width: '100%',
    height: 49,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#FFC6C6',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  boxTitle: {
    fontSize: 10,
    color: '#000',
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  createTitle: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
    color: '#F84040',
  },
});
