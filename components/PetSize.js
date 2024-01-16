import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {PetSize2, PetSize1} from '../src/Screens/SvgComponent/Logocomponent';
import {SIZES} from '../constant/theme';

const data = [
  {
    id: '1',
    size: 'Small',
    range: '01-10 Kg',
  },
  {
    id: '2',
    size: 'Medium',
    range: '11-20 Kg',
  },
  {
    id: '3',
    size: 'Large',
    range: '21+ Kg',
  },
];

const PetSize = () => {
  const [selectedItemId, setSelectedItemId] = useState(data[0].id);

  const handleItemPress = itemId => {
    setSelectedItemId(itemId);
  };

  return (
    <View style={styles.container}>
      {data.map(item => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.itemContainer,
            selectedItemId === item.id && styles.selectedItem,
          ]}
          onPress={() => handleItemPress(item.id)}>
          {selectedItemId === item.id ? <PetSize1 /> : <PetSize2 />}
          <Text
            style={[
              styles.large,
              selectedItemId === item.id && {color: '#fff'},
            ]}>
            {item.size}
          </Text>
          <Text
            style={[
              styles.large,
              selectedItemId === item.id && {color: '#fff'},
            ]}>
            {item.range}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PetSize;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: SIZES.width * 0.036,
    paddingVertical: SIZES.width * 0.051,
    justifyContent: 'space-around',
  },
  itemContainer: {
    marginHorizontal: SIZES.width * 0.026,
    alignItems: 'center',
    padding: SIZES.width * 0.026,
    borderRadius: SIZES.width * 0.031,
    width: SIZES.width * 0.18,
    height: SIZES.width * 0.18,
    gap: 2,
    borderWidth: 0.5,
    borderColor: '#FFC6C6',
  },
  text: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Visby-Medium',
  },
  large: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'VisbyRound-Bold',
    paddingTop: 1.5,
  },
  selectedItem: {
    backgroundColor: '#F84040',
  },
});
