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
          <View style={{marginTop: 10}}>
            <BackChecker placeholder={'Summary'} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
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
          <View style={{marginTop: 20}}>
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
          <View style={[styles.flexBox, {marginTop: 10, paddingHorizontal: 0}]}>
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
          <View style={{marginTop: 25}}>
            <Text style={styles.text}>Appointment Details</Text>
            <TouchableOpacity
              style={[
                styles.whiteContainer,
                {paddingHorizontal: 15, marginTop: 10},
              ]}
              onPress={() => handleCategoryClick('Grooming')}>
              <View style={styles.categoryHeader}>
                <Text style={styles.text}>Product</Text>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
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
                          height: 50,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 0.5,
                          borderRadius: 12,
                          borderColor: '#8C8C8C',
                        }}>
                        <Image
                          source={service.image}
                          style={{
                            width: 30,
                            height: 30,
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
                          height: 50,
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
                            gap: 30,
                          }}>
                          <Text
                            style={[
                              styles.text,
                              {
                                fontWeight: '700',
                                fontSize: 7,
                                color: '#F84040',
                              },
                            ]}>
                            {service.details}
                          </Text>
                          <Text
                            style={[
                              styles.text,
                              {
                                fontSize: 7,
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
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
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
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
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
      <View style={{paddingHorizontal: 16, bottom: 10}}>
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
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  text: {
    color: '#8C8C8C',
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
  },
  flexBox: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 15,
  },
  whiteContainer: {
    backgroundColor: '#fff',
    gap: 10,
    padding: 10,
    // marginTop: 10,
  },
  border: {
    width: '100%',
    height: 1,
    backgroundColor: '#FFC6C6',
  },
  colorContainer: {
    height: 40,
    backgroundColor: '#FFC6C6',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 10,
    marginTop: 35,
  },

  serviceItem: {
    padding: 10,
    marginLeft: 30,
    backgroundColor: '#fff',
    marginRight: 60,
    borderRadius: 15,
    flexDirection: 'row',
    gap: 20,
  },
  selectedService: {
    backgroundColor: '#e6f7ff', // Change background color for selected service
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
