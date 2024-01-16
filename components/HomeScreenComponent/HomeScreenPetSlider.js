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
import {SIZES} from '../../constant/theme';

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
    paddingHorizontal: SIZES.width * 0.026,
  },
  item: {
    width: SIZES.width * 0.192,
    height: SIZES.width * 0.32,
    marginHorizontal: SIZES.width * 0.021,
    borderRadius: 50,
    alignItems: 'center',
    padding: SIZES.width * 0.021,
  },
  image: {
    width: SIZES.width * 0.153,
    height: SIZES.width * 0.153,
    borderRadius: 50,
  },
  text: {
    color: '#000',
    paddingTop: SIZES.width * 0.031,
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
  },
});

export default HomeScreenPetSlider;
