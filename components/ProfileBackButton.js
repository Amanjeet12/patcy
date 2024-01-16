import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Backbutton, Editor} from '../src/Screens/SvgComponent/Logocomponent';
import {SIZES} from '../constant/theme';

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
    width: SIZES.width * 0.077,
    height: SIZES.width * 0.077,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: SIZES.width * 0.153,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: SIZES.width * 0.041,
    fontWeight: '600',
    paddingLeft: SIZES.width * 0.026,
  },
});
