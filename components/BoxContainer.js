import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BoxContainer = ({data}) => {
  const navigation = useNavigation();

  const screenMapping = {
    Supplies: 'SuppliesScreen',
    Care: 'PetCareScreen',
    Grooming: '',
    Boarding: 'BoardingScreen',
    Transport: '',
    Discover: '',
  };

  const handleBoxPress = item => {
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
    marginTop: 15,
  },
  box: {
    flexBasis: '30%',
    marginBottom: 19,
    padding: 16,
    borderRadius: 17,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  image: {
    width: 54,
    height: 54,
    resizeMode: 'cover',
    marginBottom: 7,
  },
  title: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
    color: '#000',
  },
});

export default BoxContainer;
