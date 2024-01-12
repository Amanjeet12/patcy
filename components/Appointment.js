/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {Clock} from '../src/Screens/SvgComponent/Logocomponent';

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
                gap: 20,
                paddingTop: 7,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Clock />
                <Text style={styles.type}>{appointment.timing}</Text>
              </View>
              <Text style={styles.type}>{appointment.date}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleBellIconClick(index)}>
            <Icon
              name={bellIcons[index] ? 'bell' : 'bell-fill'}
              size={16}
              color={bellIcons[index] ? '#F84040' : '#F84040'} // Change color when filled
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
    marginVertical: 5,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    height: 82,
    padding: 15,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 10,
  },
  appointmentDetails: {
    flex: 1,
    paddingLeft: 10,
  },
  name: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 12,
  },
  type: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
  },
});
