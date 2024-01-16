import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import OtpContainer from '../../../components/OtpContainer';
import {COLORS, SIZES} from '../../../constant/theme';

const OtpScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.navigate('VerifiedScreen');
    } catch (error) {
      console.error('Verification failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={isLoading ? 'rgba(255, 255, 255, 0.70)' : '#F6F6F6'}
        barStyle={'dark-content'}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        disabled={isLoading}>
        <Icon name="arrowleft" size={SIZES.width * 0.051} color={'#121212'} />
      </TouchableOpacity>
      <View style={{marginTop: SIZES.width * 0.077}}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.description}>
          We just sent an OTP to the mobile number provided
        </Text>
      </View>
      <View style={{marginTop: SIZES.width * 0.0893}}>
        <OtpContainer />
        <TouchableOpacity
          style={{alignItems: 'flex-end', marginTop: SIZES.width * 0.051}}
          onPress={() => console.log('enter')}>
          <Text style={styles.textTitle}>Send the code again</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleVerify()}
        disabled={isLoading}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      {/* Transparent Modal with Loading Indicator */}
      <Modal transparent={true} visible={isLoading}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color={COLORS.black} />
        </View>
      </Modal>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    marginHorizontal: SIZES.width * 0.041,
  },
  backButton: {
    width: SIZES.width * 0.077,
    height: SIZES.width * 0.077,
    backgroundColor: 'white',
    marginTop: SIZES.width * 0.051,
    borderRadius: SIZES.width * 0.077,
    alignItems: 'center',
    justifyContent: 'center',
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
  textTitle: {
    color: COLORS.primary,
    fontSize: SIZES.width * 0.031,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
  },
  button: {
    height: SIZES.width * 0.13,
    backgroundColor: COLORS.btn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: SIZES.width * 0.026,
    marginTop: SIZES.width * 0.0893,
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
});
