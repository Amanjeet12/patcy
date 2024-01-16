import {
  ActivityIndicator,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import CommonContainer from '../../../components/CommonContainer';
import PasswordContainer from '../../../components/PasswordContainer';
import {COLORS} from '../../../constant/theme';
import FlagContainer from '../../../components/FlagContainer';
import Button from '../../../components/Button';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.navigate('BottomTabScreen');
    } catch (error) {
      console.error('Verification failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={SIZES.width * 0.051} color={'#121212'} />
      </TouchableOpacity>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.title}>Create account</Text>
            <Text style={styles.description}>
              Enter your details to continue
            </Text>
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text style={styles.smallTitle}>Full name</Text>
            <CommonContainer placeholder={'Enter your full name'} />
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text style={styles.smallTitle}>Email address</Text>
            <CommonContainer />
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text style={styles.smallTitle}>Mobile number</Text>
            <View style={{marginTop: SIZES.width * 0.026}}>
              <FlagContainer />
            </View>
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text style={styles.smallTitle}>Create Password</Text>
            <PasswordContainer />
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text style={styles.smallTitle}>Retype Password</Text>
            <PasswordContainer />
          </View>
          <View style={{marginTop: SIZES.width * 0.064, marginBottom: SIZES.width * 0.026}}>
            <Button placeholder={'Sing Up'} screen={'SignUpOtpScreen'} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    marginTop: SIZES.width * 0.077,
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
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
    paddingTop: SIZES.width * 0.026,
  },
  backButton: {
    width: SIZES.width * 0.077,
    height: SIZES.width * 0.077,
    backgroundColor: 'white',
    marginTop: SIZES.width * 0.051,
    borderRadius: SIZES.width * 0.077,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.width * 0.041,
    marginVertical: SIZES.width * 0.039,
  },
  smallTitle: {
    fontSize: SIZES.width * 0.031,
    color: '#8C8C8C',
    fontWeight: '400',
  },
  forgotContainer: {
    marginVertical: SIZES.width * 0.051,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  forgotTitle: {
    color: COLORS.primary,
    fontSize: SIZES.width * 0.031,
    fontFamily: 'Visby-Medium',
    fontWeight: '500',
  },
  button: {
    height: SIZES.width * 0.13,
    backgroundColor: COLORS.btn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.width * 0.026,
    padding: SIZES.width * 0.026,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.70)',
    padding: SIZES.width * 0.051,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  createTitle: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
    color: '#F84040',
  },
});
