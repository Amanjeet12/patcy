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
import {Services, ServicesCare} from '../../constant/data';
import {
  CheckBox,
  CorrectCheckBox,
} from '../../src/Screens/SvgComponent/Logocomponent';
import {COLORS} from '../../constant/theme';
import {useNavigation} from '@react-navigation/native';

const SelectServiceForCareComponent = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigation = useNavigation();

  const handleServiceSelection = service => {
    setSelectedService(
      selectedService && selectedService.id === service.id ? null : service,
    );
  };

  const handleNavigation = () => {
    navigation.navigate('PetCareInnerScreen', {selectedService});
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
                {color: '#8C8C8C', marginBottom: 13},
              ]}>
              Select pet care services to add
            </Text>

            {ServicesCare.map(service => (
              <TouchableOpacity
                key={service.id}
                style={styles.serviceContainer}
                onPress={() => handleServiceSelection(service)}>
                <View style={{width: '15%', alignItems: 'center'}}>
                  <Image
                    source={service.image}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
                <View style={{width: '75%', gap: 5}}>
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
          bottom: 10,
          width: '100%',
          paddingHorizontal: 16,
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

export default SelectServiceForCareComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#121212',
    fontFamily: 'Visby-Medium',
  },
  bookingDateContainer: {
    marginTop: 10,
  },
  serviceContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
    gap: 5,
  },
  serviceName: {
    fontSize: 10,
    fontWeight: '600',
    color: '#121212',
    fontFamily: 'VisbyRound-Bold',
  },
  servicePrice: {
    fontWeight: '600',
    color: '#8C8C8C',
    fontFamily: 'Visby-Medium',
    fontSize: 12,
  },
  button: {
    height: 50,
    backgroundColor: COLORS.btn,
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
