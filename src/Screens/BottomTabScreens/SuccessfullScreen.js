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

const SuccessfullScreen = () => {
  const navigation = useNavigation();

  const handleVerify = async () => {
    navigation.navigate('BottomTabScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <View style={styles.boxContainer}>
        <Image
          source={image.Clipboard}
          style={{width: 124, height: 124, resizeMode: 'contain'}}
        />
        <Text style={styles.title}>Congratulations ! </Text>
        <Text style={styles.discription}>
          You just successfully added a new pet, you can view your pets on your
          profile page
        </Text>
      </View>
      <View style={{position: 'absolute', width: '100%', bottom: SIZES.width * 0.064}}>
        <TouchableOpacity style={styles.button} onPress={() => handleVerify()}>
          <Text style={styles.buttonText}>Back to dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessfullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.width * 0.041,
  },
  boxContainer: {
    width: 356,
    height: 366,
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
