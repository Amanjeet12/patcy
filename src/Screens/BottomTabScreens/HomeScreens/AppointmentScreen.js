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
        <View style={{marginTop: SIZES.width * 0.026, marginHorizontal: SIZES.width * 0.041}}>
          <BackChecker placeholder={'Appontments'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: SIZES.width * 0.041,
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
        <View style={{marginTop: SIZES.width * 0.039}}>
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
    height: SIZES.width * 0.115,
    backgroundColor: '#fff',
    width: '52%',
    justifyContent: 'center',
    padding: 3,
    paddingHorizontal: SIZES.width * 0.013,
  },
  text: {
    fontSize: SIZES.width * 0.026,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
    color: '#212121',
    backgroundColor: '#FFC6C6',
    paddingHorizontal: SIZES.width * 0.077,
    textAlign: 'center',
    paddingVertical: SIZES.width * 0.026,
    borderRadius: 5,
  },
});
