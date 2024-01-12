import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import image from '../constant/image';

const DisplayContainer = ({title, description, icon}) => {
  return (
    <View style={styles.flexBox}>
      <View style={[styles.flexBox, {paddingVertical: 0, gap: 10}]}>
        <Image
          source={icon}
          style={{width: 15, height: 15, resizeMode: 'contain'}}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const Subscription = () => {
  return (
    <LinearGradient
      colors={['#FFDDC6', '#FFC6C6']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <DisplayContainer
        title={'Subscription Expiry Date'}
        description={'12/12/2025'}
        icon={image.Profile1}
      />
      <View style={styles.border} />
      <DisplayContainer
        title={'Total Reward Points'}
        description={'98725'}
        icon={image.Profile2}
      />
      <View style={styles.border} />
      <DisplayContainer
        title={'Total Savings'}
        description={'AED 1,027.00'}
        icon={image.Profile3}
      />
    </LinearGradient>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  description: {
    fontSize: 12,
    fontWeight: '700',
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  border: {
    width: '100%',
    height: 2,
    backgroundColor: '#fff',
  },
});
