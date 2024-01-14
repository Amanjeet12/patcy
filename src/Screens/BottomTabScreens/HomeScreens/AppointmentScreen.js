import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackChecker from '../../../../components/BackChecker';
import Appointment from '../../../../components/Appointment';
import {doctorData} from '../../../../constant/data';

const AppointmentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <View>
        <View style={{marginTop: 10, marginHorizontal: 16}}>
          <BackChecker placeholder={'Appontments'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 16,
          }}>
          <TouchableOpacity style={styles.boxContainer}>
            <Text style={styles.text}>Upcoming Appointments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.boxContainer, {width: '48%'}]}>
            <Text style={[styles.text, {backgroundColor: '#fff'}]}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
          <Appointment data={doctorData} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  boxContainer: {
    height: 45,
    backgroundColor: '#fff',
    width: '52%',
    justifyContent: 'center',
    padding: 3,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    color: '#212121',
    backgroundColor: '#FFC6C6',
    paddingHorizontal: 30,
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
});
