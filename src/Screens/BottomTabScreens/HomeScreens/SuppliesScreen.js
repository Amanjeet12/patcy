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
import {boardingFilter, pet, supples} from '../../../../constant/data';
import HomeScreenFilter from '../../../../components/HomeScreenComponent/HomeScreenFilter';
import Searchbar from '../../../../components/Searchbar';
import FilterIconComponent from '../../../../components/HomeScreenComponent/FilterIconComponent';
import SuppliesContainer from '../../../../components/SuppliesContainer';
import HomeScreenSuppliesItem from '../../../../components/HomeScreenComponent/HomeScreenSuppliesItem';
import Slider from '@react-native-community/slider';
import {SIZES} from '../../../../constant/theme';

const SuppliesScreen = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleSliderChange = values => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };
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
          <HomeScreenPetSlider data={pet} />
        </View>
        <View style={{marginTop: 25}}>
          <HomeScreenFilter data={boardingFilter} />
        </View>
        <View
          style={{
            marginTop: 25,
            paddingHorizontal: 16,
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
