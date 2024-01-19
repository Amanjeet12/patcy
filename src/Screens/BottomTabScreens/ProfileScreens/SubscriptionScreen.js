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
import PetCareComponent from '../../SvgComponent/PetCareComponent';
import {
  Backbutton,
  PetcyLogo,
  PetcyRedLogo,
} from '../../SvgComponent/Logocomponent';
import Button from '../../../../components/Button';
import {SIZES} from '../../../../constant/theme';

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
              <Backbutton />
            </TouchableOpacity>
          </View>
          <View style={styles.ImageContainer}>
            <PetCareComponent />
            <Text style={styles.description}>Upgrade to</Text>
            <PetcyRedLogo
              width={SIZES.width * 0.205}
              height={SIZES.width * 0.102}
            />
            <Text style={styles.subscription}>Subscription</Text>
          </View>
          <View style={styles.offerContainer}>
            <View style={styles.whiteContainer}>
              <View style={styles.flexBox}>
                <Text style={styles.price}>150 AED</Text>
                <Text
                  style={[
                    styles.description,
                    {
                      paddingTop: 0,
                      color: '#000',
                      fontSize: SIZES.width * 0.031,
                    },
                  ]}>
                  / year
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  paddingHorizontal: SIZES.width * 0.051,
                  paddingTop: SIZES.width * 0.026,
                }}>
                <Button placeholder={'Subscribe Now'} />
              </View>
              <View style={styles.innerTextContainer}>
                <Text
                  style={[
                    styles.description,
                    {fontSize: SIZES.width * 0.031, paddingTop: 0},
                  ]}>
                  No hidden charges, No commitments!
                </Text>
              </View>
            </View>
            <View style={styles.SpecialOfferContainer}>
              <View
                style={{
                  paddingHorizontal: SIZES.width * 0.046,
                  paddingVertical: SIZES.width * 0.013,
                  backgroundColor: '#FFC6C6',
                  borderRadius: SIZES.width * 0.031,
                }}>
                <Text style={styles.SpecialText}>Welcome offer for you</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.redText}>Subscription Benefit</Text>
          </View>
          <View style={styles.whiteTextContainer}>
            <Text style={styles.blackText}>Enjoy discounts of up to </Text>
            <Text style={[styles.price, {paddingVertical: 5}]}>30%</Text>
            <Text style={styles.blackText}>
              Gain entry to a network of more than 500 participating businesses.
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 20, marginBottom: 50}}>
            <Text style={styles.redText}>
              4 interest-free instalments every month{' '}
            </Text>
            <Text style={styles.redText}>
              USD 25 with our Buy Now Pay Later Partner is available{' '}
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
    paddingHorizontal: SIZES.width * 0.041,
  },
  backContainer: {
    height: SIZES.width * 0.153,
    justifyContent: 'center',
  },
  backButton: {
    width: SIZES.width * 0.077,
    height: SIZES.width * 0.077,
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
    fontSize: SIZES.width * 0.036,
    fontWeight: '300',
    fontFamily: 'Visby-Medium',
    paddingTop: SIZES.width * 0.051,
  },
  subscription: {
    color: '#000',
    fontSize: SIZES.width * 0.062,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Visby-Medium',
    marginTop: -SIZES.width * 0.013,
  },
  offerContainer: {
    height: SIZES.width * 0.51,
    marginTop: SIZES.width * 0.051,
    paddingVertical: SIZES.width * 0.026,
  },
  whiteContainer: {
    height: SIZES.width * 0.44,
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
    fontSize: SIZES.width * 0.031,
    fontWeight: '300',
    color: '#000',
    fontFamily: 'Visby-Medium',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.width * 0.013,
  },
  price: {
    color: '#F84040',
    fontSize: SIZES.width * 0.064,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  innerTextContainer: {
    height: SIZES.width * 0.064,
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
    fontSize: SIZES.width * 0.031,
    fontWeight: '300',
    fontFamily: 'Visby-Medium',
  },
  whiteTextContainer: {
    height: SIZES.width * 0.33,
    borderWidth: 1,
    borderColor: '#FFC6C6',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: SIZES.width * 0.2,
    paddingVertical: SIZES.width * 0.039,
    marginTop: SIZES.width * 0.026,
    alignItems: 'center',
  },
  blackText: {
    color: '#000',
    fontSize: SIZES.width * 0.031,
    fontWeight: '300',
    lineHeight: SIZES.width * 0.046,
    fontFamily: 'Visby-Medium',
    textAlign: 'center',
  },
});
