import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Add from 'react-native-vector-icons/Ionicons';
import Minus from 'react-native-vector-icons/AntDesign';
import Like from 'react-native-vector-icons/FontAwesome';
import UnLike from 'react-native-vector-icons/FontAwesome';
import {SIZES} from '../constant/theme';

const PriceCalculater = () => {
  const [count, setCount] = useState(1);
  const [disable, setDisable] = useState(false);
  const [liked, setLiked] = useState(false);
  const [price, setPrice] = useState(72.0);

  const handleincrease = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount <= 5) {
        setDisable(newCount === 5); // Disable if count is 5
        setPrice(newCount * 72.0);
        return newCount;
      }
      return prevCount; // Don't change count if it's already at the maximum
    });
  };

  const handleDecrease = () => {
    setCount(prevCount => {
      const newCount = prevCount - 1;
      if (newCount >= 1) {
        setDisable(false); // Enable the button if count is greater than 1
        setPrice(newCount * 72.0);
        return newCount;
      }
      return prevCount; // Don't change count if it's already at the minimum
    });
  };

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.whiteButtonContainer}>
          <TouchableOpacity
            style={[styles.addStyle, styles.specialStyle]}
            onPress={handleDecrease}>
            <Minus name="minus" size={SIZES.width * 0.064} color={'#ffc6c6'} />
          </TouchableOpacity>
        </View>
        <View style={[styles.whiteButtonContainer, {width: '30%'}]}>
          <Text
            style={[styles.title, {color: '#000', fontFamily: 'Visby-Medium'}]}>
            {count}
          </Text>
        </View>
        <View style={styles.whiteButtonContainer}>
          <TouchableOpacity
            style={[styles.addStyle, styles.specialStyle]}
            onPress={handleincrease}>
            <Add
              name="add-outline"
              size={SIZES.width * 0.064}
              color={'#ffc6c6'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{width: '50%', alignItems: 'center'}}>
        <Text style={styles.title}>AED {price.toFixed(2)}</Text>
      </View>
      <View style={{width: '20%', alignItems: 'center'}}>
        {liked === false ? (
          <Like
            name="heart-o"
            size={SIZES.width * 0.051}
            color={'#000'}
            onPress={handleLikeToggle}
          />
        ) : (
          <UnLike
            name="heart"
            size={SIZES.width * 0.051}
            color={'#F84040'}
            onPress={handleLikeToggle}
          />
        )}
      </View>
    </View>
  );
};

export default PriceCalculater;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.width * 0.041,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffc6c6',
    borderRadius: 32,
    width: SIZES.width * 0.31,
    height: SIZES.width * 0.102,
  },
  specialStyle: {
    width: SIZES.width * 0.064,
    height: SIZES.width * 0.064,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  whiteButtonContainer: {
    width: '35%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#F84040',
    fontSize: SIZES.width * 0.051,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
  },
});
