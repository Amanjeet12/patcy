/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import image from '../../../../constant/image';
import {SIZES} from '../../../../constant/theme';
import BackChecker from '../../../../components/BackChecker';
import {AddPaymentIcon, Backbutton} from '../../SvgComponent/Logocomponent';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../../components/Button';

const PaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={{width: SIZES.width, height: 270}}>
            <Image
              source={image.Cat1}
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            />
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)']}
              style={styles.gradient}>
              <View style={{position: 'absolute', top: 30, left: 16}}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}>
                  <Backbutton />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  paddingHorizontal: 16,
                }}>
                <Text style={styles.text}>you pay</Text>
                <Text
                  style={[
                    styles.text,
                    {fontSize: 18, textDecorationLine: 'line-through'},
                  ]}>
                  AED 1,025.69
                </Text>
                <Text style={[styles.text, {fontSize: 40, paddingTop: 10}]}>
                  AED 1,000.69
                </Text>
                <LinearGradient
                  colors={['#D9D9D9', '#f68585']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0.5}}
                  style={{
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                    borderRadius: 12,
                    width: '100%',
                  }}>
                  <View style={{position: 'absolute', top: -20}}>
                    <Image
                      source={image.Upper}
                      style={{width: 30, height: 30, resizeMode: 'contain'}}
                    />
                  </View>
                  <Text style={[styles.text, {fontSize: 14}]}>
                    Woah! you’re saving AED 25.69
                  </Text>
                </LinearGradient>
              </View>
            </LinearGradient>
          </View>
          <View style={{marginHorizontal: 16, marginVertical: 25}}>
            <Text style={styles.title}>Payment Methods</Text>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text style={[styles.text, {color: '#8C8C8C'}]}>
              Credits and Debit Card
            </Text>
            <View style={styles.whiteContainer}>
              <Image
                source={image.Card}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
              <Text style={[styles.text, {color: '#000'}]}>
                **** **** **** *980
              </Text>
            </View>
          </View>
          <View style={{marginHorizontal: 16}}>
            <View style={[styles.whiteContainer, {height: 50}]}>
              <AddPaymentIcon />

              <View style={{gap: 3}}>
                <Text style={[styles.text, {color: '#F84040', fontSize: 10}]}>
                  Add New Card{' '}
                </Text>
                <Text style={[styles.text, {color: '#8C8C8C', fontSize: 10}]}>
                  Save and pay via cards{' '}
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: 16, marginTop: 25}}>
            <Text style={[styles.text, {color: '#8C8C8C'}]}>Upi</Text>
            <View style={styles.whiteContainer}>
              <Image
                source={image.ApplePay}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
              />
              <Text style={[styles.text, {color: '#000'}]}>Apple Pay</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 16}}>
            <View style={[styles.whiteContainer, {height: 50}]}>
              <AddPaymentIcon />
              <View style={{gap: 3}}>
                <Text style={[styles.text, {color: '#F84040', fontSize: 10}]}>
                  Add New UPI ID{' '}
                </Text>
                <Text style={[styles.text, {color: '#8C8C8C', fontSize: 10}]}>
                  You need to have a registered UPI ID{' '}
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: 16, marginTop: 25}}>
            <Text style={[styles.text, {color: '#8C8C8C'}]}>
              More Payment Options
            </Text>
            <View style={[styles.whiteContainer, {height: 50}]}>
              <Image
                source={image.bank}
                style={{width: 15, height: 15, resizeMode: 'contain'}}
              />
              <View style={{gap: 3}}>
                <Text style={[styles.text, {color: '#000', fontSize: 10}]}>
                  NetWorking
                </Text>
                <Text style={[styles.text, {color: '#8C8C8C', fontSize: 10}]}>
                  Select from a list of banks{' '}
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: 16}}>
            <View style={[styles.whiteContainer, {height: 50}]}>
              <Image
                source={image.Cash}
                style={{width: 20, height: 20, resizeMode: 'cover'}}
              />
              <View style={{gap: 3}}>
                <Text style={[styles.text, {color: '#000', fontSize: 10}]}>
                  Cash on delivery{' '}
                </Text>
                <Text style={[styles.text, {color: '#8C8C8C', fontSize: 10}]}>
                  You need to have a registered UPI ID{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{paddingHorizontal: 16, bottom: 10}}>
        <Button placeholder={'Place Order'} screen={'BottomTabScreen'} />
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    flex: 1,
    marginBottom: 30,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
    color: '#121212',
  },
  whiteContainer: {
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 16,
    marginTop: 10,
  },
});
