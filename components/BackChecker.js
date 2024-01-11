import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Backbutton} from '../src/Screens/SvgComponent/Logocomponent';

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
    width: 30, // Increased width for better touch area
    height: 30, // Increased height for better touch area
    backgroundColor: 'white',
    borderRadius: 20, // Adjusted borderRadius for a circular shape
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 10,
  },
});
