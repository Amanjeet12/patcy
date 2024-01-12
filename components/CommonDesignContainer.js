/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {SIZES} from '../constant/theme';
import Like from 'react-native-vector-icons/FontAwesome';
import UnLike from 'react-native-vector-icons/FontAwesome';
import Add from 'react-native-vector-icons/Ionicons';
import {Location, Star} from '../src/Screens/SvgComponent/Logocomponent';

const CommonDesignContainer = ({data}) => {
  const [likedItems, setLikedItems] = useState(data.map(item => item.id));

  const handleLikeToggle = itemId => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter(id => id !== itemId));
    } else {
      setLikedItems([...likedItems, itemId]);
    }
  };
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={{width: '100%', height: 110}}>
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
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  backgroundColor: '#FFC6C6',
                  borderRadius: 32,
                },
              ]}>
              {item.offer}
            </Text>
          </View>
        ) : null}
      </View>
      <View style={{padding: 10}}>
        <Text style={[styles.title, {color: '#000', fontWeight: '600'}]}>
          {item.name}
        </Text>
        <View style={[styles.flexBoxContainer, {gap: 20, marginTop: 5}]}>
          <View style={styles.flexBoxContainer}>
            <Location />
            <Text style={[styles.title, {fontWeight: '400', color: '#8C8C8C'}]}>
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
        <View style={[styles.flexBox, {marginTop: 3}]}>
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
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // Display two items in each row
      />
    </View>
  );
};

export default CommonDesignContainer;

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    paddingBottom: 200,
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: SIZES.width / 2 - 30, // Adjusted width
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
  },
  title: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'left',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addStyle: {
    width: 20,
    height: 20,
    backgroundColor: '#8c8c8c',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBoxContainer: {flexDirection: 'row', alignItems: 'center', gap: 5},
  OfferContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
