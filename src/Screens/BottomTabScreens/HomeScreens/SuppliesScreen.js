/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HomeScreenCartComponent from '../../../../components/HomeScreenComponent/HomeScreenCartComponent';
import image from '../../../../constant/image';
import HomeScreenPetSlider from '../../../../components/HomeScreenComponent/HomeScreenPetSlider';
import {
  boardingFilter,
  pet,
  pets,
  supples,
  suppliesFilter,
} from '../../../../constant/data';
import HomeScreenFilter from '../../../../components/HomeScreenComponent/HomeScreenFilter';
import Searchbar from '../../../../components/Searchbar';
import FilterIconComponent from '../../../../components/HomeScreenComponent/FilterIconComponent';
import HomeScreenSuppliesItem from '../../../../components/HomeScreenComponent/HomeScreenSuppliesItem';
import {SIZES} from '../../../../constant/theme';

const SuppliesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <HomeScreenCartComponent
          placeholder={'Supplies'}
          screen={'View Orders'}
          icon={image.Cart}
        />
        <View>
          <HomeScreenPetSlider data={pets} />
        </View>
        <View style={{marginTop: SIZES.width * 0.064}}>
          <HomeScreenFilter data={suppliesFilter} />
        </View>
        <View
          style={{
            marginTop: SIZES.width * 0.064,
            paddingHorizontal: SIZES.width * 0.041,
            flexDirection: 'row',
          }}>
          <View style={{width: '85%'}}>
            <Searchbar />
          </View>
          <View style={{width: '15%'}}>
            <FilterIconComponent />
          </View>
        </View>
        <View>
          <HomeScreenSuppliesItem data={supples} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SuppliesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});
