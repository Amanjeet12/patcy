/* eslint-disable react-native/no-inline-styles */
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
import React, {useState} from 'react';
import BackChecker from '../../../../components/BackChecker';
import {
  ArrowDown,
  ArrowUp,
  PromoCode,
  RedCancel,
  RedContact,
  RedLocation,
  RedPhone,
  RedService,
} from '../../SvgComponent/Logocomponent';
import image from '../../../../constant/image';
import Button from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const SuppliesCheckoutScreen = () => {
  const navigation = useNavigation();
  const [selectedService, setSelectedService] = useState(null);

  const [showGroomingDetails, setShowGroomingDetails] = useState(false);
  const [services, setServices] = useState([
    {
      id: 1,
      category: 'Grooming',
      name: 'Wild Balance Bye Bye Plaque Supplement for Dogs & Cats',
      details: 'AED 50',
      image: image.Cat1,
    },
    {
      id: 2,
      category: 'Grooming',
      name: 'Wild Balance Bye Bye Plaque Supplement for Dogs & Cats',
      details: 'AED 50',
      image: image.Cat2,
    },
    {
      id: 3,
      category: 'Grooming',
      name: 'Wild Balance Bye Bye Plaque Supplement for Dogs & Cats',
      details: 'AED 12',
      image: image.Cat3,
    },
  ]);

  const handleCategoryClick = category => {
    setShowGroomingDetails(
      category === 'Grooming' ? !showGroomingDetails : false,
    );
  };

  const handleCancelClick = id => {
    // Remove the item with the specified ID from the services array
    setServices(prevServices =>
      prevServices.filter(service => service.id !== id),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={{marginTop: SIZES.width * 0.026}}>
            <BackChecker placeholder={'Summary'} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: SIZES.width * 0.026,
            }}>
            <Text style={styles.text}>Delivery Address</Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.text,
                  {fontFamily: 'Visby-Medium', color: 'red'},
                ]}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text style={styles.text}>Home</Text>
            <View style={[styles.whiteContainer, {marginTop: 10}]}>
              <View style={styles.flexBox}>
                <RedLocation />
                <Text style={[styles.text, {color: '#000'}]}>
                  12B, Mahdneel Towers, Jumeriah Lake Towers, Dubai
                </Text>
              </View>
              <View style={styles.border} />

              <View style={styles.flexBox}>
                <RedContact />
                <Text style={[styles.text, {color: '#000'}]}>
                  Rashid Damian{' '}
                </Text>
              </View>
              <View style={styles.border} />

              <View style={styles.flexBox}>
                <RedPhone />
                <Text style={[styles.text, {color: '#000'}]}>
                  +971 45 706 0000{' '}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.flexBox, {marginTop: SIZES.width * 0.026, paddingHorizontal: 0}]}>
            <Text style={styles.text}>
              <Text style={[styles.text, {color: '#F84040'}]}>
                Delivery by Fri 29 Dec, 2023{' '}
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.colorContainer}
            onPress={() => navigation.navigate('RedeemCodeScreen')}>
            <PromoCode />
            <Text style={[styles.text, {color: '#000'}]}>
              Have a promo code?
            </Text>
          </TouchableOpacity>
          <View style={{marginTop: SIZES.width * 0.064}}>
            <Text style={styles.text}>Appointment Details</Text>
            <TouchableOpacity
              style={[
                styles.whiteContainer,
                {paddingHorizontal: SIZES.width * 0.039, marginTop: SIZES.width * 0.026},
              ]}
              onPress={() => handleCategoryClick('Grooming')}>
              <View style={styles.categoryHeader}>
                <Text style={styles.text}>Product</Text>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: SIZES.width * 0.013}}>
                  <Text style={[styles.text, {color: '#000'}]}>
                    {services.length} items
                  </Text>
                  {showGroomingDetails ? <ArrowUp /> : <ArrowDown />}
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.border} />

            {showGroomingDetails &&
              services.map(
                service =>
                  service.category === 'Grooming' && (
                    <View key={service.id} style={styles.serviceItem}>
                      <View
                        style={{
                          width: '20%',
                          height: SIZES.width * 0.13,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 0.5,
                          borderRadius: 12,
                          borderColor: '#8C8C8C',
                        }}>
                        <Image
                          source={service.image}
                          style={{
                            width: SIZES.width * 0.077,
                            height: SIZES.width * 0.077,
                            resizeMode: 'cover',
                            borderRadius: 50,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          width: '56%',
                          justifyContent: 'space-around',
                          gap: 3,
                          height: SIZES.width * 0.13,
                        }}>
                        <Text
                          style={[
                            styles.text,
                            {fontWeight: '400', fontSize: 8, color: '#000'},
                          ]}>
                          {service.name}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: SIZES.width * 0.077,
                          }}>
                          <Text
                            style={[
                              styles.text,
                              {
                                fontWeight: '700',
                                fontSize: SIZES.width * 0.018,
                                color: '#F84040',
                              },
                            ]}>
                            {service.details}
                          </Text>
                          <Text
                            style={[
                              styles.text,
                              {
                                fontSize: SIZES.width * 0.018,
                                fontWeight: '400',
                                color: '#8C8C8C',
                              },
                            ]}>
                            x 1
                          </Text>
                        </View>
                      </View>
                    </View>
                  ),
              )}
            <View
              style={[
                styles.whiteContainer,
                styles.flexBox,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={styles.text}>price</Text>
              <Text style={[styles.text, {color: '#000'}]}>AED 125.00</Text>
            </View>
            <View style={styles.border} />

            <View
              style={[
                styles.whiteContainer,
                styles.flexBox,
                {justifyContent: 'space-between'},
              ]}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: SIZES.width * 0.026}}>
                <Text style={styles.text}>Delivery Fees</Text>
                <RedService />
              </View>
              <Text style={[styles.text, {color: '#000'}]}>AED 50.00</Text>
            </View>
            <View style={styles.border} />
            <View
              style={[
                styles.whiteContainer,
                styles.flexBox,
                {justifyContent: 'space-between'},
              ]}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: SIZES.width * 0.026}}>
                <Text style={styles.text}>Service</Text>
                <RedService />
              </View>
              <Text style={[styles.text, {color: '#000'}]}>AED 500.00</Text>
            </View>
            <View style={styles.border} />

            <View
              style={[
                styles.whiteContainer,
                styles.flexBox,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={[styles.text, {color: '#000', fontWeight: '700'}]}>
                Total
              </Text>
              <Text style={[styles.text, {color: '#000', fontWeight: '700'}]}>
                AED 1,000.00
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{paddingHorizontal: SIZES.width * 0.041, bottom: SIZES.width * 0.026}}>
        <Button placeholder={'Place Order'} screen={'PaymentScreen'} />
      </View>
    </SafeAreaView>
  );
};

export default SuppliesCheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.041,
    marginBottom: SIZES.width * 0.051,
  },
  text: {
    color: '#8C8C8C',
    fontSize: SIZES.width * 0.026,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
  },
  flexBox: {
    flexDirection: 'row',
    gap: SIZES.width * 0.026,
    paddingHorizontal: SIZES.width * 0.039,
  },
  whiteContainer: {
    backgroundColor: '#fff',
    gap: SIZES.width * 0.026,
    padding: SIZES.width * 0.026,
    // marginTop: 10,
  },
  border: {
    width: '100%',
    height: 1,
    backgroundColor: '#FFC6C6',
  },
  colorContainer: {
    height: SIZES.width * 0.102,
    backgroundColor: '#FFC6C6',
    borderRadius: SIZES.width * 0.026,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.width * 0.039,
    gap: SIZES.width * 0.026,
    marginTop: SIZES.width * 0.0893,
  },

  serviceItem: {
    padding: SIZES.width * 0.026,
    marginLeft: SIZES.width * 0.077,
    backgroundColor: '#fff',
    marginRight: SIZES.width * 0.153,
    borderRadius: 15,
    flexDirection: 'row',
    gap: SIZES.width * 0.051,
  },
  selectedService: {
    backgroundColor: '#e6f7ff', // Change background color for selected service
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
