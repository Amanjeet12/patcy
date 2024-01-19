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
      <View style={{width: '100%', height: SIZES.width * 0.282}}>
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
            <View
              style={{
                paddingHorizontal: SIZES.width * 0.026,
                paddingVertical: SIZES.width * 0.01,
                backgroundColor: '#FFC6C6',
                borderRadius: 30,
              }}>
              <Text style={[styles.title,{fontWeight:'300'}]}>{item.offer}</Text>
            </View>
          </View>
        ) : null}
      </View>
      <View style={{padding: SIZES.width * 0.026}}>
        <Text style={[styles.title, {color: '#000', fontWeight: '500'}]}>
          {item.name}
        </Text>
        <View
          style={[
            styles.flexBoxContainer,
            {gap: SIZES.width * 0.051, marginTop: SIZES.width * 0.013},
          ]}>
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
                size={SIZES.width * 0.041}
                color={'#F84040'}
                onPress={() => handleLikeToggle(item.id)}
              />
            ) : (
              <Like
                name="heart-o"
                size={SIZES.width * 0.041}
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
    paddingBottom: SIZES.width * 0.51,
    paddingHorizontal: SIZES.width * 0.026,
  },
  itemContainer: {
    width: SIZES.width / 2 - 25,
    height: SIZES.width * 0.46,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: SIZES.width * 0.02,
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
  addStyle: {
    width: SIZES.width * 0.051,
    height: SIZES.width * 0.051,
    backgroundColor: '#8c8c8c',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.width * 0.013,
  },
  OfferContainer: {
    position: 'absolute',
    top: SIZES.width * 0.026,
    left: SIZES.width * 0.026,
  },
});
