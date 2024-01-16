/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook
import {SIZES} from '../../constant/theme';
import Like from 'react-native-vector-icons/FontAwesome';
import UnLike from 'react-native-vector-icons/FontAwesome';
import {Location, Star} from '../../src/Screens/SvgComponent/Logocomponent';

const CommonDesignContainer = ({data, screen}) => {
  const [likedItems, setLikedItems] = useState(data.map(item => item.id));
  const navigation = useNavigation(); // Get the navigation object using the hook

  const handleLikeToggle = itemId => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter(id => id !== itemId));
    } else {
      setLikedItems([...likedItems, itemId]);
    }
  };

  const handleItemPress = itemId => {
    navigation.navigate(screen, {itemId});
  };

  const renderItems = () => {
    return data.map(item => (
      <TouchableOpacity
        key={item.id}
        style={styles.itemContainer}
        onPress={() => handleItemPress(item.id)}>
        <View style={{width: '100%', height: SIZES.width * 0.281}}>
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
          {item.offer ? (
            <View style={styles.OfferContainer}>
              <Text
                style={[
                  styles.title,
                  {
                    paddingHorizontal: SIZES.width * 0.026,
                    paddingVertical: SIZES.width * 0.01,
                    backgroundColor: '#FFC6C6',
                    borderRadius: 32,
                  },
                ]}>
                {item.offer}
              </Text>
            </View>
          ) : null}
        </View>
        <View style={{padding: SIZES.width * 0.026}}>
          <Text
            style={[styles.title, {color: '#000', fontWeight: '600'}]}
            numberOfLines={1}>
            {item.name}
          </Text>
          <View
            style={[
              styles.flexBoxContainer,
              {gap: SIZES.width * 0.051, marginTop: SIZES.width * 0.013},
            ]}>
            <View style={styles.flexBoxContainer}>
              <Location />
              <Text
                style={[styles.title, {fontWeight: '400', color: '#8C8C8C'}]}>
                {item.distance}
              </Text>
            </View>

            <Text
              style={[
                styles.title,
                {
                  fontWeight: '600',
                  color: item.status === 'Closed' ? 'red' : '#1EAD24',
                },
              ]}>
              {item.status}
            </Text>
          </View>
          <View style={[styles.flexBox, {marginTop: SIZES.width * 0.009}]}>
            <View style={styles.flexBoxContainer}>
              <Star />
              <Text style={styles.title}>{item.rating}</Text>
            </View>
            <View>
              {likedItems.includes(item.id) ? (
                <UnLike
                  name="heart"
                  size={16}
                  color={'#F84040'}
                  onPress={() => handleLikeToggle(item.id)}
                />
              ) : (
                <Like
                  name="heart-o"
                  size={16}
                  color={'#F84040'}
                  onPress={() => handleLikeToggle(item.id)}
                />
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
  };

  return <View style={styles.container}>{renderItems()}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.width * 0.026,
    paddingHorizontal: SIZES.width * 0.026,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: SIZES.width / 2 - 30,
    height: SIZES.width * 0.46,
    backgroundColor: '#fff',
    borderRadius: SIZES.width * 0.026,
    margin: SIZES.width * 0.026,
  },
  title: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: SIZES.width * 0.026,
    fontWeight: '600',
    textAlign: 'left',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexBoxContainer: {flexDirection: 'row', alignItems: 'center', gap: 5},
  OfferContainer: {
    position: 'absolute',
    top: SIZES.width * 0.026,
    left: SIZES.width * 0.026,
  },
});

export default CommonDesignContainer;
