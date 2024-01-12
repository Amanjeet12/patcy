import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import PetCareComponent from '../../SvgComponent/PetCareComponent';
import {PetcyLogo, PetcyRedLogo} from '../../SvgComponent/Logocomponent';
import Button from '../../../../components/Button';

const SubscriptionScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.backContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Icon name="arrowleft" size={24} color={'#121212'} />
            </TouchableOpacity>
          </View>
          <View style={styles.ImageContainer}>
            <PetCareComponent />
            <Text style={styles.description}>Upgrade to</Text>
            <PetcyRedLogo width={80} height={40} />
            <Text style={styles.subscription}>Subscription</Text>
          </View>
          <View style={styles.offerContainer}>
            <View style={styles.whiteContainer}>
              <View style={styles.flexBox}>
                <Text style={styles.price}>150 AED</Text>
                <Text
                  style={[
                    styles.description,
                    {paddingTop: 0, color: '#000', fontSize: 12},
                  ]}>
                  / year
                </Text>
              </View>
              <View
                style={{width: '100%', paddingHorizontal: 20, paddingTop: 10}}>
                <Button placeholder={'Subscribe Now'} />
              </View>
              <View style={styles.innerTextContainer}>
                <Text
                  style={[styles.description, {fontSize: 12, paddingTop: 0}]}>
                  No hidden charges, No commitments!
                </Text>
              </View>
            </View>
            <View style={styles.SpecialOfferContainer}>
              <Text style={styles.SpecialText}>Welcome offer for you</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.redText}>Subscription Benefit</Text>
          </View>
          <View style={styles.whiteTextContainer}>
            <Text style={styles.blackText}>Enjoy discounts of up to </Text>
            <Text style={[styles.price, {paddingVertical: 5}]}>30%</Text>
            <Text style={styles.blackText}>
              Gain entry to a network of more{'\n'}than 500 participating
              businesses.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: 16,
  },
  backContainer: {
    height: 60,
    justifyContent: 'center',
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    alignItems: 'center',
  },
  description: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
    paddingTop: 20,
  },
  subscription: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Visby-Medium',
    marginTop: -5,
  },
  offerContainer: {
    height: 200,
    marginTop: 20,
    paddingVertical: 10,
  },
  whiteContainer: {
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#FFC6C6',
  },
  SpecialOfferContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
  },
  SpecialText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    paddingHorizontal: 18,
    paddingVertical: 5,
    backgroundColor: '#FFC6C6',
    borderRadius: 12,
    fontFamily: 'Visby-Medium',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  price: {
    color: '#F84040',
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  innerTextContainer: {
    height: 25,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#E3E3E5',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  redText: {
    color: '#F84040',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
  },
  whiteTextContainer: {
    height: 120,
    borderWidth: 1,
    borderColor: '#FFC6C6',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 80,
    paddingVertical: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  blackText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: 'Visby-Medium',
  },
});
