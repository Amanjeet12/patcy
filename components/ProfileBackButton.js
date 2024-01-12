import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Backbutton, Editor} from '../src/Screens/SvgComponent/Logocomponent';

const ProfileBackButton = ({placeholder}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Backbutton />
        </TouchableOpacity>
        <Text style={styles.title}>{placeholder}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('EditScreen')}>
          <Editor />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileBackButton;

const styles = StyleSheet.create({
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 10,
  },
});
