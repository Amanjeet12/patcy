/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {EyeOff} from '../src/Screens/SvgComponent/Logocomponent';
import {SIZES} from '../constant/theme';

const PasswordContainer = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={{width: '90%', height: '100%', backgroundColor: '#000s'}}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          style={{
            fontFamily: 'Visby-Medium',
            fontSize: SIZES.width * 0.031,
            fontWeight: '600',
            color: '#000',
            flex: 1,
          }}
          placeholderTextColor={'#8C8C8C'}
        />
      </View>

      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={{
          width: '10%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {isPasswordVisible ? <EyeOff /> : <EyeOff />}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: SIZES.width * 0.129,
    backgroundColor: '#EAEAEA',
    borderWidth: 0.5,
    borderColor: '#8C8C8C',
    marginTop: SIZES.width * 0.026,
    alignItems: 'center',
    paddingHorizontal: SIZES.width * 0.039,
    borderRadius: SIZES.width * 0.026,
  },
});
