import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../constant/theme';

const BoxContainer = ({data}) => {
  const navigation = useNavigation();

  const screenMapping = {
    Supplies: 'SuppliesScreen',
    Care: 'PetCareScreen',
    Grooming: 'GroomingScreen',
    Boarding: 'BoardingScreen',
    Transport: '',
    Discover: '',
  };

  const handleBoxPress = item => {
    if (item.title === 'Transport' || item.title === 'Discover') {
      return;
    }
    const screenName = screenMapping[item.title] || 'DefaultScreen';
    navigation.navigate(screenName);
  };

  const renderBox = item => (
    <TouchableOpacity
      key={item.id}
      style={[styles.box, {backgroundColor: item.backgroundColor}]}
      onPress={() => handleBoxPress(item)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return <View style={styles.container}>{data.map(renderBox)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: SIZES.width * 0.039,
  },
  box: {
    flexBasis: '30%',
    marginBottom: SIZES.width * 0.049,
    padding: SIZES.width * 0.041,
    borderRadius: 17,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  image: {
    width: SIZES.width * 0.141,
    height: SIZES.width * 0.141,
    resizeMode: 'cover',
    marginBottom: SIZES.width * 0.018,
  },
  title: {
    textAlign: 'center',
    fontSize: SIZES.width * 0.029,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
    color: '#000',
  },
});

export default BoxContainer;
