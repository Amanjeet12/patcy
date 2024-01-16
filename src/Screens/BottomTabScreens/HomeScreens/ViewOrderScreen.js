/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BackChecker from '../../../../components/BackChecker';
import {supples} from '../../../../constant/data';
import Add from 'react-native-vector-icons/Ionicons';
import Minus from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES} from '../../../../constant/theme';
import {Forwardlogo} from '../../SvgComponent/Logocomponent';

const ViewOrderScreen = () => {
  const navigation = useNavigation();
  const [suppless, setSuppless] = useState(supples);

  const handleNavigation = () => {
    navigation.navigate('SuppliesCheckoutScreen');
  };

  const increaseQuantity = itemId => {
    setSuppless(prevSupples =>
      prevSupples.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decreaseQuantity = itemId => {
    setSuppless(prevSupples =>
      prevSupples.map(item =>
        item.id === itemId && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View
          style={{
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.5,
            borderRadius: 12,
            borderColor: '#8C8C8C',
          }}>
          <Image
            source={item.image}
            style={{
              width: SIZES.width * 0.13,
              height: SIZES.width * 0.13,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{width: '50%', justifyContent: 'space-between'}}>
          <Text style={[styles.description, {fontSize: SIZES.width * 0.031}]}>
            {item.name}
          </Text>
          <Text
            style={[
              styles.title,
              {fontSize: SIZES.width * 0.026, fontWeight: '700'},
            ]}>
            {item.price}
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.buttonContainer}>
            <View style={styles.whiteButtonContainer}>
              <TouchableOpacity
                style={[styles.addStyle, styles.specialStyle]}
                onPress={() => decreaseQuantity(item.id)}>
                <Minus
                  name="minus"
                  size={SIZES.width * 0.041}
                  color={'#ffc6c6'}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.whiteButtonContainer, {width: '30%'}]}>
              <Text style={styles.description}>{item.quantity}</Text>
            </View>
            <View style={styles.whiteButtonContainer}>
              <TouchableOpacity
                style={[styles.addStyle, styles.specialStyle]}
                onPress={() => increaseQuantity(item.id)}>
                <Add
                  name="add-outline"
                  size={SIZES.width * 0.041}
                  color={'#ffc6c6'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <View
        style={{
          paddingHorizontal: SIZES.width * 0.041,
          marginTop: SIZES.width * 0.026,
          flexDirection: 'row',
          alignItems: 'center',
          gap: SIZES.width * 0.013,
        }}>
        <BackChecker placeholder={'Your Cart'} />
        <Text style={styles.title}>(3 items)</Text>
      </View>
      <FlatList
        data={suppless}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: SIZES.width * 0.041,
          marginTop: SIZES.width * 0.026,
        }}
      />
      <View
        style={{
          backgroundColor: '#fff',
          height: 120,
          justifyContent: 'center',
        }}>
        <View
          style={{
            bottom: SIZES.width * 0.026,
            paddingHorizontal: SIZES.width * 0.041,
            paddingTop: SIZES.width * 0.026,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.width * 0.013,
            }}>
            <Text
              style={[
                styles.description,
                {fontSize: SIZES.width * 0.031, fontWeight: '700'},
              ]}>
              Total bill
            </Text>
            <Text style={[styles.title, {fontSize: SIZES.width * 0.031}]}>
              AED 2,325.00
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              {
                marginTop: SIZES.width * 0.051,
                flexDirection: 'row',
                alignItems: 'center',
                gap: SIZES.width * 0.026,
              },
            ]}
            onPress={() => handleNavigation()}>
            <Text style={[styles.buttonText, {color: COLORS.white}]}>
              Checkout
            </Text>
            <Forwardlogo />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  title: {
    fontSize: SIZES.width * 0.041,
    fontWeight: '600',
    color: '#F84040',
    fontFamily: 'VisbyRound-Bold',
  },
  mainContainer: {
    backgroundColor: '#fff',
    marginBottom: SIZES.width * 0.026,
    height: SIZES.width * 0.23,
    padding: SIZES.width * 0.034,
    flexDirection: 'row',
    borderRadius: SIZES.width * 0.026,
    gap: SIZES.width * 0.051,
  },
  addStyle: {
    width: SIZES.width * 0.051,
    height: SIZES.width * 0.051,
    backgroundColor: '#8c8c8c',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffc6c6',
    borderRadius: 12,
    width: SIZES.width * 0.153,
    height: SIZES.width * 0.051,
  },
  specialStyle: {
    width: SIZES.width * 0.039,
    height: SIZES.width * 0.039,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  whiteButtonContainer: {
    width: '35%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: SIZES.width * 0.026,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Visby-Medium',
  },
  button: {
    height: SIZES.width * 0.13,
    backgroundColor: '#D52C17',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.width * 0.026,
    padding: SIZES.width * 0.026,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
});
