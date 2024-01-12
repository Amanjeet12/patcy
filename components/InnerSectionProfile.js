/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Arrow,
  BarCode,
  BarCodeActive,
  Card,
  CardActive,
  ChangePassword,
  Notifications,
  PetcyProfile,
  SubscriptionProfile,
} from '../src/Screens/SvgComponent/Logocomponent';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import image from '../constant/image';

const InnerSectionProfile = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const [activeButton, setActiveButton] = useState('E Card');

  const handleButtonPress = buttonType => {
    setActiveButton(buttonType);
  };

  const handleNaviagtion = data => {
    navigation.navigate(data);
  };

  const handleOpenBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.open();
    }
  };

  const handleCloseSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.flexBox}
        onPress={() => handleOpenBottomSheet()}>
        <View style={styles.innerContainer}>
          <PetcyProfile />
          <Text style={styles.title}>My petcy</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <Arrow />
        </View>
      </TouchableOpacity>
      <View style={styles.Border} />
      <TouchableOpacity
        style={styles.flexBox}
        onPress={() => handleNaviagtion('SubscriptionScreen')}>
        <View style={styles.innerContainer}>
          <SubscriptionProfile />
          <Text style={styles.title}>Subscription</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <Arrow />
        </View>
      </TouchableOpacity>
      <View style={styles.Border} />
      <TouchableOpacity style={styles.flexBox}>
        <View style={styles.innerContainer}>
          <Notifications />
          <Text style={styles.title}> Notifications</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <Arrow />
        </View>
      </TouchableOpacity>
      <View style={styles.Border} />
      <TouchableOpacity style={styles.flexBox}>
        <View style={styles.innerContainer}>
          <ChangePassword />
          <Text style={styles.title}>Change Password</Text>
        </View>
        <View style={{paddingRight: 10}}>
          <Arrow />
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={500}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.30)',
          },
          draggableIcon: {
            backgroundColor: '#D9D9D9',
            width: 80,
            height: 5,
          },
        }}>
        <View style={styles.bottomContainer}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.redText}>My Petcy</Text>
          </View>
          <View style={styles.border} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              gap: 20,
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={
                activeButton === 'E Card'
                  ? styles.buttonActiveContainer
                  : styles.buttonInactiveContainer
              }
              onPress={() => handleButtonPress('E Card')}>
              {activeButton === 'E Card' ? <CardActive /> : <Card />}
              <Text
                style={
                  activeButton === 'E Card'
                    ? styles.activeText
                    : styles.inActiveText
                }>
                E Card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                activeButton === 'QR Code'
                  ? styles.buttonActiveContainer
                  : styles.buttonInactiveContainer
              }
              onPress={() => handleButtonPress('QR Code')}>
              {activeButton === 'QR Code' ? <BarCodeActive /> : <BarCode />}
              <Text
                style={
                  activeButton === 'QR Code'
                    ? styles.activeText
                    : styles.inActiveText
                }>
                QR Code
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 200,
              marginTop: 50,
              padding: 10,
            }}>
            <Image
              source={activeButton === 'E Card' ? image.Card : image.Barcode}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default InnerSectionProfile;

const styles = StyleSheet.create({
  container: {
    height: 190,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
  },
  Border: {
    height: 0.5,
    backgroundColor: '#8C8C8C',
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
  },
  innerContainer: {flexDirection: 'row', alignItems: 'center', gap: 10},
  title: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 14,
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  bottomContainer: {
    paddingHorizontal: 20,
  },
  redText: {
    color: '#F84040',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
  },
  border: {
    height: 0.5,
    backgroundColor: '#8C8C8C',
    width: '100%',
  },
  buttonActiveContainer: {
    backgroundColor: 'red',
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonInactiveContainer: {
    backgroundColor: '#fff',
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  activeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    paddingTop: 3,
  },
  inActiveText: {
    color: '#000',
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    paddingTop: 3,
  },
});
