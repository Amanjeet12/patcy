import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import image from '../constant/image';
import Icon from 'react-native-vector-icons/Entypo';
import {Search} from '../src/Screens/SvgComponent/Logocomponent';

const Searchbar = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.imageContainer}>
        <Search />
      </View>
      <View style={{width: '80%'}}>
        <TextInput
          placeholder="Search for a pet product or center"
          keyboardType="default"
          maxLength={10}
          style={{
            color: '#000',
            fontSize: 12,
            fontWeight: '600',
            fontFamily: 'Visby-Medium',
          }}
          placeholderTextColor={'#9F9F9F'}
        />
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 40,
    borderWidth: 0.3,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    borderColor: '#8C8C8C',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    width: '10%',
    alignItems: 'center',
    gap: 10,
  },
});
