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
import {COLORS} from '../../../constant/theme';

const MailAuthScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
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
        <Icon name="arrowleft" size={20} color={'#121212'} />
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
          <View style={{marginTop: 20}}>
            <Text style={styles.smallTitle}>Email</Text>
            <CommonContainer />
          </View>
          <View style={{marginTop: 20}}>
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
            style={{marginTop: 200, alignItems: 'center'}}
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
    marginTop: 50,
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
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 15,
  },
  smallTitle: {
    fontSize: 12,
    color: '#8C8C8C',
    fontWeight: '400',
  },
  forgotContainer: {
    marginVertical: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  forgotTitle: {
    color: COLORS.primary,
    fontSize: 12,
    fontFamily: 'Visby-Medium',
    fontWeight: '500',
  },
  button: {
    height: 50,
    backgroundColor: COLORS.btn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.70)',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  createTitle: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
    color: '#F84040',
  },
});
