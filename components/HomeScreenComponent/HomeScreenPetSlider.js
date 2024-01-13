/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const HomeScreenPetSlider = ({data}) => {
  const [selectedItemId, setSelectedItemId] = useState(
    data.length > 0 ? data[0].id : null,
  );

  useEffect(() => {
    setSelectedItemId(data.length > 0 ? data[0].id : null);
  }, [data]);
  const handleItemPress = id => {
    setSelectedItemId(id);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      {data.map(item => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.item,
            {
              backgroundColor: selectedItemId === item.id ? '#F84040' : '#fff',
            },
          ]}
          onPress={() => handleItemPress(item.id)}>
          <Image source={item.image} style={styles.image} />
          <Text
            style={[
              styles.text,
              {
                color: selectedItemId === item.id ? '#fff' : '#000',
              },
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
  },
  item: {
    width: 75,
    height: 125,
    marginHorizontal: 8,
    borderRadius: 50,
    alignItems: 'center',
    padding: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  text: {
    color: '#000',
    paddingTop: 12,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
  },
});

export default HomeScreenPetSlider;
