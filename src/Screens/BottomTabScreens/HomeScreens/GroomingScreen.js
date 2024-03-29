import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HomeScreenBackButton from '../../../../components/HomeScreenComponent/HomeScreenBackButton';
import HomeScreenPetSlider from '../../../../components/HomeScreenComponent/HomeScreenPetSlider';
import {
  Care,
  CareFilter,
  Grooming,
  GroomingFilter,
  boardingFilter,
  pet,
  pets,
} from '../../../../constant/data';
import HomeScreenFilter from '../../../../components/HomeScreenComponent/HomeScreenFilter';
import Searchbar from '../../../../components/Searchbar';
import {FilterIcon} from '../../SvgComponent/Logocomponent';
import FilterIconComponent from '../../../../components/HomeScreenComponent/FilterIconComponent';
import CommonDesignContainer from '../../../../components/CommonDesignContainer';
import BoardingScrollComponent from '../../../../components/HomeScreenComponent/BoardingScrollComponent';
import {SIZES} from '../../../../constant/theme';

const GroomingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View>
          <HomeScreenBackButton
            placeholder={'Grooming'}
            screen={'View Appointments'}
            title={'AppointmentScreen'}
          />
          <View>
            <HomeScreenPetSlider data={pets} />
          </View>
          <View style={{marginTop: SIZES.width * 0.064}}>
            <HomeScreenFilter data={GroomingFilter} />
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
            <BoardingScrollComponent
              data={Grooming}
              screen={'GroomingInnerScreen'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroomingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});
