import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from '../Button';
import {Backbutton} from '../../src/Screens/SvgComponent/Logocomponent';
import {useNavigation} from '@react-navigation/native';

const HomeScreenCartComponent = ({placeholder, icon, screen, title}) => {
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
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        <TouchableOpacity onPress={() => console.log('enter')}>
          <Text style={styles.textContainer}>{screen}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={icon}
            style={{width: 21, height: 15, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreenCartComponent;

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
