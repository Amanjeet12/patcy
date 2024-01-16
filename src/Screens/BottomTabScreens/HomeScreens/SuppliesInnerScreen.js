import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HomeScreenCartComponent from '../../../../components/HomeScreenComponent/HomeScreenCartComponent';
import image from '../../../../constant/image';
import HomeScreenImageSlider from '../../../../components/HomeScreenComponent/HomeScreenImageSlider';
import {BigSlider, BigSliderS, boardingFilter} from '../../../../constant/data';
import {RedLocation, Star} from '../../SvgComponent/Logocomponent';
import HomeScreenSizeSlider from '../../../../components/HomeScreenComponent/HomeScreenSizeSlider';
import PriceCalculater from '../../../../components/PriceCalculater';
import Button from '../../../../components/Button';
import {COLORS} from '../../../../constant/theme';
import {useNavigation} from '@react-navigation/native';
import SuppliesBottomContainer from '../../../../components/SuppliesBottomContainer';

const data = [
  {
    id: '1',
    name: '10kg',
  },
  {
    id: '3',
    name: '100kg',
  },
  {
    id: '2',
    name: '150kg',
  },
];

const SuppliesInnerScreen = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(false);

  const switchButton = () => {
    setActive(true);
  };
  const handleNavigation = () => {
    navigation.navigate('ViewOrderScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <HomeScreenCartComponent
          placeholder={''}
          screen={'View Orders'}
          icon={image.Cart}
        />
        <View>
          <HomeScreenImageSlider data={BigSliderS} />
        </View>
        <View style={styles.nameContainer}>
          <View style={{gap: SIZES.width * 0.013, width: '80%'}}>
            <Text style={styles.title}>
              Wild Balance Bye Bye Plaque Supplement for Dogs & Cats
            </Text>
            <Text style={styles.description}>Healthcare</Text>
          </View>
          <View style={[styles.whiteContainer, {height: SIZES.width * 0.141}]}>
            <View style={styles.flexBox}>
              <Star />
              <Text style={styles.text}>5.0</Text>
            </View>
            <Text style={[styles.description, {fontSize: SIZES.width * 0.026}]}>
              150 Reviews
            </Text>
          </View>
        </View>
        <View>
          <View
            style={[
              styles.flexBox,
              {marginTop: SIZES.width * 0.064, paddingHorizontal: SIZES.width * 0.041, gap: SIZES.width * 0.013},
            ]}>
            <Text style={[styles.description, {color: '#F84040'}]}>Size :</Text>
            <HomeScreenSizeSlider data={data} />
          </View>
        </View>
        <View style={{marginTop: SIZES.width * 0.051}}>
          <PriceCalculater />
        </View>
        <View>
          <SuppliesBottomContainer />
        </View>
      </ScrollView>

      {active === true ? (
        <View style={{paddingHorizontal: SIZES.width * 0.041, bottom: SIZES.width * 0.026}}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: '#D52C17',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.width * 0.041,
              },
            ]}
            onPress={() => handleNavigation()}>
            <Text style={[styles.buttonText, {color: COLORS.white}]}>
              Proceed to order 1 item
            </Text>
            <Text style={[styles.buttonText, {color: COLORS.white}]}>
              AED 235
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{paddingHorizontal: SIZES.width * 0.041, bottom: SIZES.width * 0.026, gap: SIZES.width * 0.026}}>
          <Button placeholder={'Buy Now'} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => switchButton()}>
            <Text style={[styles.buttonText, {color: COLORS.btn}]}>
              {'Add To Cart'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SuppliesInnerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  nameContainer: {
    paddingHorizontal: SIZES.width * 0.041,
    marginTop: SIZES.width * 0.039,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: SIZES.width * 0.041,
    fontWeight: '600',
    color: '#121212',
    fontFamily: 'VisbyRound-Bold',
  },
  description: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  flexBox: {flexDirection: 'row', alignItems: 'center', gap: SIZES.width * 0.026},
  whiteContainer: {
    alignItems: 'center',
    gap: SIZES.width * 0.013,
    padding: SIZES.width * 0.026,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  button: {
    height: SIZES.width * 0.13,
    backgroundColor: '#FFC6C6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: SIZES.width * 0.026,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  text: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    color: '#212121',
  },
});
