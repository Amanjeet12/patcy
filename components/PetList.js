import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../constant/theme';

const PetList = ({data, onSelectItem}) => {
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
    paddingVertical: SIZES.width * 0.026,
    paddingHorizontal: SIZES.width * 0.039,
  },
  petItem: {
    backgroundColor: '#fff',
    marginHorizontal: SIZES.width * 0.013,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: SIZES.width * 0.039,
    borderRadius: 7,
  },
  text: {
    color: '#121212',
    fontSize: SIZES.width * 0.026,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.051,
  },
});

export default PetList;
