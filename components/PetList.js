import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constant/theme';

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
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  petItem: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    borderRadius: 7,
  },
  text: {
    color: '#121212',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 20,
  },
});

export default PetList;
