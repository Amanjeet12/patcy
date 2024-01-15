import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const AddScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => console.log('enter')}>
        <Text>AddScreen</Text>
      </TouchableOpacity>
    </>
  );
};

export default AddScreen;

const styles = StyleSheet.create({});
