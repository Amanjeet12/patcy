import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from '../Button';
import {Backbutton} from '../../src/Screens/SvgComponent/Logocomponent';
import {useNavigation} from '@react-navigation/native';

const HomeScreenBackButton = ({placeholder, icon, screen}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 17}}>
        <TouchableOpacity
          style={styles.whiteButton}
          onPress={() => navigation.goBack()}>
          <Backbutton />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{placeholder ? placeholder : null}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.textContainer}>{screen}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenBackButton;

const styles = StyleSheet.create({
  maincontainer: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  whiteButton: {
    width: 30,
    height: 30,
    borderRadius: 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#121212',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
  },
  textContainer: {
    fontFamily: 'Visby-Medium',
    fontSize: 10,
    fontWeight: '500',
    color: '#000',
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#D52C17',
  },
});
