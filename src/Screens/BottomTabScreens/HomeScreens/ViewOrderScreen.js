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
import {COLORS} from '../../../../constant/theme';
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
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />
        </View>
        <View style={{width: '50%', justifyContent: 'space-between'}}>
          <Text style={[styles.description, {fontSize: 12}]}>{item.name}</Text>
          <Text style={[styles.title, {fontSize: 10, fontWeight: '700'}]}>
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
                <Minus name="minus" size={16} color={'#ffc6c6'} />
              </TouchableOpacity>
            </View>
            <View style={[styles.whiteButtonContainer, {width: '30%'}]}>
              <Text style={styles.description}>{item.quantity}</Text>
            </View>
            <View style={styles.whiteButtonContainer}>
              <TouchableOpacity
                style={[styles.addStyle, styles.specialStyle]}
                onPress={() => increaseQuantity(item.id)}>
                <Add name="add-outline" size={16} color={'#ffc6c6'} />
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
          paddingHorizontal: 16,
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}>
        <BackChecker placeholder={'Your Cart'} />
        <Text style={styles.title}>(3 items)</Text>
      </View>
      <FlatList
        data={suppless}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingHorizontal: 16, marginTop: 10}}
      />
      <View
        style={{
          backgroundColor: '#fff',
          height: 120,
          justifyContent: 'center',
        }}>
        <View style={{bottom: 10, paddingHorizontal: 16, paddingTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 5,
            }}>
            <Text
              style={[styles.description, {fontSize: 12, fontWeight: '700'}]}>
              Total bill
            </Text>
            <Text style={[styles.title, {fontSize: 12}]}>AED 2,325.00</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              {
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
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
    fontSize: 16,
    fontWeight: '600',
    color: '#F84040',
    fontFamily: 'VisbyRound-Bold',
  },
  mainContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    height: 90,
    padding: 13,
    flexDirection: 'row',
    borderRadius: 10,
    gap: 20,
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
    backgroundColor: '#ffc6c6',
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
  description: {
    fontSize: 10,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Visby-Medium',
  },
  button: {
    height: 50,
    backgroundColor: '#D52C17',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
});
