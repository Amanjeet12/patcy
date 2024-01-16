import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {SIZES} from '../constant/theme';

const Backbutton = ({placeholder}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={SIZES.width * 0.062} color={'#121212'} />
      </TouchableOpacity>

      <View>
        <Text style={styles.title}>Add Pet</Text>
      </View>
    </View>
  );
};

export default Backbutton;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.153,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: SIZES.width * 0.077, // Increased width for better touch area
    height: SIZES.width * 0.077, // Increased height for better touch area
    backgroundColor: 'white',
    borderRadius: 20, // Adjusted borderRadius for a circular shape
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: SIZES.width * 0.041,
    fontWeight: '600',
    paddingLeft: SIZES.width * 0.026,
  },
});
