import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../constant/theme';

const FavouritesSlider = ({data, onSelectItem}) => {
  const [selectedItem, setSelectedItem] = useState(0); // Initialize with 0 for the first item

  useEffect(() => {
    onSelectItem(data[selectedItem]);
  }, [data, onSelectItem, selectedItem]);

  const handleItemClick = index => {
    setSelectedItem(index);
    onSelectItem(data[index]);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.petItem,
            selectedItem === index ? {backgroundColor: COLORS.primary} : null,
          ]}
          onPress={() => handleItemClick(index)}>
          <Text
            style={[
              styles.text,
              selectedItem === index ? {color: '#fff'} : null,
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.width * 0.026,
    marginTop: SIZES.width * 0.026,
  },
  petItem: {
    backgroundColor: '#fff',
    marginHorizontal: SIZES.width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#FFC6C6',
    paddingHorizontal: SIZES.width * 0.064,
    borderRadius: 32,
    paddingVertical: SIZES.width * 0.013,
  },
  text: {
    color: '#121212',
    fontSize: SIZES.width * 0.026,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.051,
    fontFamily: 'Visby-Medium',
  },
});

export default FavouritesSlider;
