/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
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
import {COLORS, SIZES} from '../../../constant/theme';
import ImageSlider2 from '../../../components/ImageSlider2';
import StoreContainer from '../../../components/StoreContainer';
import Appointment from '../../../components/Appointment';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <DashboardContainer />
        </View>
        <View
          style={{
            backgroundColor: '#F6F6F6',
            flex: 1,
            borderTopLeftRadius: SIZES.width * 0.102,
            borderTopRightRadius: SIZES.width * 0.102,
          }}>
          <View
            style={{
              marginTop: SIZES.width * 0.077,
              paddingHorizontal: SIZES.width * 0.041,
            }}>
            <Text style={styles.title}>Pet Services</Text>
            <BoxContainer data={box} />
          </View>
          <View style={{marginVertical: SIZES.width * 0.064}}>
            <CustomImageCarousal
              data={NormalSlider}
              autoPlay={true}
              pagination={false}
            />
          </View>
          <View style={{marginVertical: SIZES.width * 0.051}}>
            <View
              style={{
                marginHorizontal: SIZES.width * 0.041,
                marginBottom: SIZES.width * 0.026,
              }}>
              <Text style={styles.title}>Top Deals</Text>
            </View>
            <ImageSlider images={data2} />
          </View>

          <View style={{marginVertical: SIZES.width * 0.026}}>
            <View
              style={{
                marginHorizontal: SIZES.width * 0.041,
                marginBottom: SIZES.width * 0.026,
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
          <View style={{marginVertical: SIZES.width * 0.051}}>
            <View
              style={{
                marginHorizontal: SIZES.width * 0.041,
                marginBottom: SIZES.width * 0.026,
              }}>
              <Text style={styles.title}>Featured Stores</Text>
            </View>
            <StoreContainer data={store} />
          </View>
          <View style={{marginVertical: SIZES.width * 0.026}}>
            <View
              style={{
                marginHorizontal: SIZES.width * 0.041,
                marginBottom: SIZES.width * 0.026,
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
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F84040',
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.041,
  },
  title: {
    color: '#000',
    fontSize: SIZES.width * 0.036,
    fontWeight: '700',
    fontFamily: 'Visby-Medium',
  },
  description: {
    color: COLORS.primary,
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
  },
});
