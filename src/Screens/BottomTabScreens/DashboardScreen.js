/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DashboardContainer from '../../../components/DashboardContainer';
import BoxContainer from '../../../components/BoxContainer';
import {
  NormalSlider,
  box,
  data2,
  data3,
  doctorData,
  store,
} from '../../../constant/data';
import CustomImageCarousal from '../../../components/CustomImageCarousal';
import ImageSlider from '../../../components/ImageSlider';
import {COLORS} from '../../../constant/theme';
import ImageSlider2 from '../../../components/ImageSlider2';
import StoreContainer from '../../../components/StoreContainer';
import Appointment from '../../../components/Appointment';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <DashboardContainer />
        </View>
        <View
          style={{
            backgroundColor: '#F6F6F6',
            flex: 1,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}>
          <View style={{marginTop: 30, paddingHorizontal: 16}}>
            <Text style={styles.title}>Pet Services</Text>
            <BoxContainer data={box} />
          </View>
          <View style={{marginVertical: 25}}>
            <CustomImageCarousal
              data={NormalSlider}
              autoPlay={true}
              pagination={false}
            />
          </View>
          <View style={{marginVertical: 20}}>
            <View style={{marginHorizontal: 16, marginBottom: 10}}>
              <Text style={styles.title}>Top Deals</Text>
            </View>
            <ImageSlider images={data2} />
          </View>

          <View style={{marginVertical: 10}}>
            <View
              style={{
                marginHorizontal: 16,
                marginBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.title}>Top Grommers</Text>
              <TouchableOpacity>
                <Text style={styles.description}>view all</Text>
              </TouchableOpacity>
            </View>
            <ImageSlider2 images={data3} />
          </View>
          <View style={{marginVertical: 20}}>
            <View style={{marginHorizontal: 16, marginBottom: 10}}>
              <Text style={styles.title}>Featured Stores</Text>
            </View>
            <StoreContainer data={store} />
          </View>
          <View style={{marginVertical: 10}}>
            <View
              style={{
                marginHorizontal: 16,
                marginBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.title}>Upcoming Appointments</Text>
              <TouchableOpacity>
                <Text style={styles.description}>view all</Text>
              </TouchableOpacity>
            </View>
            <Appointment data={doctorData} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F84040',
  },
  mainContainer: {
    paddingHorizontal: 16,
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Visby-Medium',
  },
  description: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Visby-Medium',
  },
});
