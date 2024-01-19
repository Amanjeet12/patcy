/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {Clock} from '../src/Screens/SvgComponent/Logocomponent';
import {SIZES} from '../constant/theme';

const Appointment = ({data}) => {
  const [bellIcons, setBellIcons] = useState(Array(data.length).fill(false));

  const handleBellIconClick = index => {
    const updatedBellIcons = [...bellIcons];
    updatedBellIcons[index] = !updatedBellIcons[index];
    setBellIcons(updatedBellIcons);
  };

  return (
    <View>
      {data.map((appointment, index) => (
        <View key={appointment.id} style={styles.appointmentContainer}>
          <Image source={appointment.image} style={styles.image} />
          <View style={styles.appointmentDetails}>
            <Text style={styles.name}>{appointment.name}</Text>
            <Text style={[styles.type, {paddingTop: 7}]}>
              {appointment.type}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: SIZES.width * 0.051,
                paddingTop: SIZES.width * 0.018,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: SIZES.width * 0.026,
                }}>
                <Clock />
                <Text style={styles.type}>{appointment.timing}</Text>
              </View>
              <Text style={styles.type}>{appointment.date}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleBellIconClick(index)}>
            <Icon
              name={bellIcons[index] ? 'bell' : 'bell-fill'}
              size={SIZES.width * 0.041}
              color={bellIcons[index] ? '#212121' : '#F84040'} // Change color when filled
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  appointmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.width * 0.01,
    backgroundColor: '#fff',
    marginHorizontal: SIZES.width * 0.041,
    height: SIZES.width * 0.21,
    padding: SIZES.width * 0.039,
    borderRadius: 10,
  },
  image: {
    width: SIZES.width * 0.13,
    height: SIZES.width * 0.13,
    borderRadius: SIZES.width * 0.031,
    marginRight: SIZES.width * 0.026,
  },
  appointmentDetails: {
    flex: 1,
    paddingLeft: SIZES.width * 0.026,
  },
  name: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    lineHeight: SIZES.width * 0.031,
  },
  type: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: SIZES.width * 0.026,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.031,
  },
});
