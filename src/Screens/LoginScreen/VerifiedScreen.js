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
import image from '../../../constant/image';
import {COLORS, SIZES} from '../../../constant/theme';
import {useNavigation} from '@react-navigation/native';

const VerifiedScreen = () => {
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
      <StatusBar
        backgroundColor={isLoading ? 'rgba(255, 255, 255, 0.70)' : '#F6F6F6'}
        barStyle={'dark-content'}
      />
      <View style={styles.boxContainer}>
        <Image
          source={image.Verified}
          style={{
            width: SIZES.width * 0.3,
            height: SIZES.width * 0.3,
            resizeMode: 'contain',
          }}
        />
        <Text style={styles.title}>Verified!</Text>
        <Text style={[styles.discription, {width: '100%'}]}>
          Congratulations, you have successfully verified your mobile number
        </Text>
      </View>
      <View style={{position: 'absolute', width: '100%', bottom: 25}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleVerify()}
          disabled={isLoading}>
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      </View>

      {/* Transparent Modal with Loading Indicator */}
      <Modal transparent={true} visible={isLoading}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color={COLORS.black} />
        </View>
      </Modal>
    </View>
  );
};

export default VerifiedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.width * 0.041,
  },
  boxContainer: {
    width: SIZES.height * 0.43,
    height: SIZES.height * 0.4,
    backgroundColor: '#FFF0F0',
    paddingHorizontal: SIZES.width * 0.115,
    paddingVertical: SIZES.width * 0.077,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.width * 0.062,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    color: '#000',
    marginTop: SIZES.width * 0.064,
  },
  discription: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
    color: '#000',
    textAlign: 'center',
    paddingTop: SIZES.width * 0.026,
  },
  button: {
    width: '100%',
    height: SIZES.width * 0.13,
    backgroundColor: COLORS.btn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.width * 0.026,
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
