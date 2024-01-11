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
        <Icon name="arrowleft" size={20} color={'#121212'} />
      </TouchableOpacity>
      <Text style={styles.title}>Add Pet</Text>
    </View>
  );
};

export default Backbutton;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: 16,
    fontWeight: '600',
  },
});
