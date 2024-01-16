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

const HomeScreenSizeSlider = ({data}) => {
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
              borderColor: selectedItemId === item.id ? '#F84040' : '#F84040',
              borderWidth: 0.5,
            },
          ]}
          onPress={() => handleItemPress(item.id)}>
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
    marginHorizontal: SIZES.width * 0.021,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.width * 0.026,
    padding: SIZES.width * 0.021,
    paddingHorizontal: SIZES.width * 0.039,
    borderRadius: 10,
  },
  image: {
    width: SIZES.width * 0.039,
    height: SIZES.width * 0.039,
  },
  text: {
    color: '#000',
    fontSize: SIZES.width * 0.026,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
  },
});

export default HomeScreenSizeSlider;
