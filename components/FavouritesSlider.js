import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constant/theme';

const FavouritesSlider = ({data, onSelectItem}) => {
  const [selectedItem, setSelectedItem] = useState(null);

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
    paddingHorizontal: 10,
  },
  petItem: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#FFC6C6',
    paddingHorizontal: 25,
    borderRadius: 32,
    paddingVertical: 7,
  },
  text: {
    color: '#121212',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'Visby-Medium',
  },
});

export default FavouritesSlider;
