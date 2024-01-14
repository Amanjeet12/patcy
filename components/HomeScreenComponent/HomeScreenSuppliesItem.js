/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {SIZES} from '../../constant/theme';
import Like from 'react-native-vector-icons/FontAwesome';
import UnLike from 'react-native-vector-icons/FontAwesome';
import Add from 'react-native-vector-icons/Ionicons';
import Minus from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const HomeScreenSuppliesItem = ({data}) => {
  const navigation = useNavigation();
  const [likedItems, setLikedItems] = useState(data.map(item => item.id));
  const [activeItems, setActiveItems] = useState([]);
  const [itemsData, setItemsData] = useState(data);

  const handleLikeToggle = itemId => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter(id => id !== itemId));
    } else {
      setLikedItems([...likedItems, itemId]);
    }
  };

  const handleHide = itemId => {
    setActiveItems([...activeItems, itemId]);
    handleIncreaseQuantity(itemId);
  };

  const handleIncreaseQuantity = itemId => {
    const updatedData = itemsData.map(item =>
      item.id === itemId ? {...item, quantity: item.quantity + 1} : item,
    );

    setItemsData(updatedData);
  };

  const handleDecreaseQuantity = itemId => {
    const updatedData = itemsData.map(item => {
      if (item.id === itemId && item.quantity > 0) {
        if (item.quantity - 1 < 1) {
          setActiveItems(activeItems.filter(id => id !== itemId));
        }
        return {...item, quantity: item.quantity - 1};
      }
      return item;
    });

    setItemsData(updatedData);
  };

  const handleNavigation = itemId => {
    navigation.navigate('SuppliesInnerScreen');
  };

  const renderItem = item => {
    const isActive = activeItems.includes(item.id);

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        key={item.id}
        onPress={() => handleNavigation(item.id)}>
        <View style={styles.flexBox}>
          <View>
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
        <View style={{width: '100%', height: 100, marginVertical: 5}}>
          <Image
            source={item.image}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={[styles.title, {color: '#8C8C8C', paddingTop: 5}]}>
          {item.type}
        </Text>
        <View style={[styles.flexBox, {paddingTop: 5}]}>
          <View>
            <Text style={[styles.title, {color: '#F84040', fontWeight: '700'}]}>
              {item.price}
            </Text>
          </View>
          <View>
            {isActive === false ? (
              <TouchableOpacity
                style={styles.addStyle}
                onPress={() => handleHide(item.id)}>
                <Add name="add-outline" size={16} color={'#fff'} />
              </TouchableOpacity>
            ) : (
              <View style={styles.buttonContainer}>
                <View style={styles.whiteButtonContainer}>
                  <TouchableOpacity
                    style={[styles.addStyle, styles.specialStyle]}
                    onPress={() => handleDecreaseQuantity(item.id)}>
                    <Minus name="minus" size={16} color={'#ffc6c6'} />
                  </TouchableOpacity>
                </View>
                <View style={[styles.whiteButtonContainer, {width: '30%'}]}>
                  <Text style={styles.title}>{item.quantity}</Text>
                </View>
                <View style={styles.whiteButtonContainer}>
                  <TouchableOpacity
                    style={[styles.addStyle, styles.specialStyle]}
                    onPress={() => handleIncreaseQuantity(item.id)}>
                    <Add name="add-outline" size={16} color={'#ffc6c6'} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return <View style={styles.container}>{itemsData.map(renderItem)}</View>;
};

export default HomeScreenSuppliesItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 12,
    marginTop: 10,
  },
  itemContainer: {
    width: SIZES.width / 2 - 30, // Adjusted width
    height: 230,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 20,
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 8,
    backgroundColor: '#ffc6c6',
    // paddingHorizontal: 5,
    // paddingVertical: 3,
    borderRadius: 12,
    width: 60,
    height: 20,
  },
  specialStyle: {
    width: 15,
    height: 15,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  whiteButtonContainer: {
    width: '35%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
