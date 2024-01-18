/* eslint-disable react/self-closing-comp */
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
import {COLORS, SIZES} from '../../../constant/theme';

const MailAuthScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.navigate('DashboardScreen');
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
            <Text style={styles.title}>Login to your account</Text>
            <Text style={styles.description}>
              Please provide your email and password
            </Text>
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text style={styles.smallTitle}>Email</Text>
            <CommonContainer />
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text style={styles.smallTitle}>Password</Text>
            <PasswordContainer />
          </View>
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotTitle}>Forgot Password</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleVerify()}
              disabled={isLoading}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{marginTop: SIZES.width * 0.33, alignItems: 'center'}}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.createTitle}>Create an account</Text>
          </TouchableOpacity>

          {/* Transparent Modal with Loading Indicator */}
          <Modal transparent={true} visible={isLoading}>
            <View style={styles.modalContent}>
              <ActivityIndicator size="large" color={COLORS.black} />
            </View>
          </Modal>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default MailAuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    marginTop: SIZES.width * 0.13,
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
    borderRadius: 30,
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
    borderRadius: 10,
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
