import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackChecker from '../../../../components/BackChecker';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../../constant/theme';
import {Redeem, Search} from '../../SvgComponent/Logocomponent';
import {TextInput} from 'react-native-gesture-handler';

const RedeemCodeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <View style={styles.mainContainer}>
        <View style={{marginTop: SIZES.width * 0.026}}>
          <BackChecker placeholder={'Promotions'} />
        </View>
        <View style={{marginTop: SIZES.width * 0.051}}>
          <Text style={[styles.text, {color: '#8C8C8C', marginBottom: 10}]}>
            Enter code to redeem
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Redeem />
          </View>
          <View style={{width: '80%'}}>
            <TextInput
              placeholder="Search for a pet product or center"
              keyboardType="default"
              maxLength={10}
              style={{
                color: '#000',
                fontSize: SIZES.width * 0.031,
                fontWeight: '600',
                fontFamily: 'Visby-Medium',
              }}
              placeholderTextColor={'#9F9F9F'}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Redeem Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RedeemCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.041,
  },
  text: {
    color: '#8C8C8C',
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
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
  inputContainer: {
    width: '100%',
    height: SIZES.width * 0.13,
    borderWidth: 0.3,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    borderColor: '#8C8C8C',
    paddingHorizontal: SIZES.width * 0.039,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.width * 0.051,
  },
  imageContainer: {
    flexDirection: 'row',
    width: '10%',
    alignItems: 'center',
    gap: SIZES.width * 0.026,
  },
});
