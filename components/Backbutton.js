import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Backbutton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={24} color={'#121212'} />
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
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 30, // Increased width for better touch area
    height: 30, // Increased height for better touch area
    backgroundColor: 'white',
    borderRadius: 20, // Adjusted borderRadius for a circular shape
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 10,
  },
});
