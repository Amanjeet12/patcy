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

const HomeScreenFilter = ({data}) => {
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
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
  },
  image: {
    width: 15,
    height: 15,
  },
  text: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
  },
});

export default HomeScreenFilter;
