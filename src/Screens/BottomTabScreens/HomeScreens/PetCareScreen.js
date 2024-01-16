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
import {Care, CareFilter, boardingFilter, pet} from '../../../../constant/data';
import HomeScreenFilter from '../../../../components/HomeScreenComponent/HomeScreenFilter';
import Searchbar from '../../../../components/Searchbar';
import {FilterIcon} from '../../SvgComponent/Logocomponent';
import FilterIconComponent from '../../../../components/HomeScreenComponent/FilterIconComponent';
import CommonDesignContainer from '../../../../components/CommonDesignContainer';
import BoardingScrollComponent from '../../../../components/HomeScreenComponent/BoardingScrollComponent';

const PetCareScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View>
          <HomeScreenBackButton
            placeholder={'Pet Care'}
            screen={'View Appointments'}
            title={'AppointmentScreen'}
          />
          <View>
            <HomeScreenPetSlider data={pet} />
          </View>
          <View style={{marginTop: SIZES.width * 0.064}}>
            <HomeScreenFilter data={CareFilter} />
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
              data={Care}
              screen={'PetCareInnerScreen'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PetCareScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});
