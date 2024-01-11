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
            <Text style={styles.title}>Create account</Text>
            <Text style={styles.description}>
              Enter your details to continue
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.smallTitle}>Full name</Text>
            <CommonContainer placeholder={'Enter your full name'} />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.smallTitle}>Email address</Text>
            <CommonContainer />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.smallTitle}>Mobile number</Text>
            <View style={{marginTop: 10}}>
              <FlagContainer />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.smallTitle}>Create Password</Text>
            <PasswordContainer />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.smallTitle}>Retype Password</Text>
            <PasswordContainer />
          </View>
          <View style={{marginTop: 25, marginBottom: 10}}>
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
    marginTop: 30,
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
