import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Backbutton} from '../src/Screens/SvgComponent/Logocomponent';
import {SIZES} from '../constant/theme';

const BackChecker = ({placeholder}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Backbutton />
      </TouchableOpacity>
      <Text style={styles.title}>{placeholder}</Text>
    </View>
  );
};

export default BackChecker;

const styles = StyleSheet.create({
  backButton: {
    width: SIZES.width * 0.077, // Increased width for better touch area
    height: SIZES.width * 0.077, // Increased height for better touch area
    backgroundColor: 'white',
    borderRadius: 20, // Adjusted borderRadius for a circular shape
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: SIZES.width * 0.153,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: SIZES.width * 0.041,
    fontWeight: '600',
    paddingLeft: SIZES.width * 0.026,
  },
});
