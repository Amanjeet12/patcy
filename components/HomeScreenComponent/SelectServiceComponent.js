/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
import HomeScreenBackButton from './HomeScreenBackButton';
import BackChecker from '../BackChecker';
import {Services} from '../../constant/data';
import {
  CheckBox,
  CorrectCheckBox,
} from '../../src/Screens/SvgComponent/Logocomponent';
import {COLORS, SIZES} from '../../constant/theme';
import {useNavigation} from '@react-navigation/native';

const SelectServiceComponent = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigation = useNavigation();

  const handleServiceSelection = service => {
    setSelectedService(
      selectedService && selectedService.id === service.id ? null : service,
    );
  };

  const handleNavigation = () => {
    navigation.navigate('BoardingInnerScreen', {selectedService});
  };

  const isButtonPressable = selectedService !== null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <BackChecker placeholder={'Add Service'} />
          <View style={styles.bookingDateContainer}>
            <Text
              style={[
                styles.description,
                {color: '#8C8C8C', marginBottom: SIZES.width * 0.034},
              ]}>
              Select a boarding service
            </Text>

            {Services.map(service => (
              <TouchableOpacity
                key={service.id}
                style={styles.serviceContainer}
                onPress={() => handleServiceSelection(service)}>
                <View style={{width: '15%', alignItems: 'center'}}>
                  <Image
                    source={service.image}
                    style={{
                      width: SIZES.width * 0.077,
                      height: SIZES.width * 0.077,
                      borderRadius: 30,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
                <View style={{width: '75%', gap: SIZES.width * 0.013}}>
                  <Text style={styles.serviceName}>{service.name}</Text>
                  <Text style={styles.servicePrice}>{service.price}</Text>
                </View>
                <View>
                  {selectedService && selectedService.id === service.id ? (
                    <CorrectCheckBox />
                  ) : (
                    <CheckBox />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: SIZES.width * 0.026,
          width: '100%',
          paddingHorizontal: SIZES.width * 0.041,
        }}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isButtonPressable ? '#D52C17' : '#BDBDBD',
            },
          ]}
          onPress={() => {
            if (isButtonPressable) {
              handleNavigation();
            }
          }}>
          <Text style={styles.buttonText}>Add Service</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectServiceComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.041,
  },
  description: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  bookingDateContainer: {
    marginTop: SIZES.width * 0.026,
  },
  serviceContainer: {
    marginBottom: SIZES.width * 0.026,
    padding: SIZES.width * 0.026,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    height: SIZES.width * 0.166,
    alignItems: 'center',
    gap: SIZES.width * 0.013,
  },
  serviceName: {
    fontSize: SIZES.width * 0.026,
    fontWeight: '600',
    color: '#121212',
    fontFamily: 'VisbyRound-Bold',
  },
  servicePrice: {
    fontWeight: '600',
    color: '#8C8C8C',
    fontFamily: 'Visby-Medium',
    fontSize: SIZES.width * 0.031,
  },
  button: {
    height: SIZES.width * 0.13,
    backgroundColor: COLORS.btn,
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
});
