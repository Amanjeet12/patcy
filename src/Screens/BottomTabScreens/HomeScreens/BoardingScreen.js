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
import {Care, boardingFilter, pet} from '../../../../constant/data';
import HomeScreenFilter from '../../../../components/HomeScreenComponent/HomeScreenFilter';
import Searchbar from '../../../../components/Searchbar';
import {FilterIcon} from '../../SvgComponent/Logocomponent';
import FilterIconComponent from '../../../../components/HomeScreenComponent/FilterIconComponent';
import CommonDesignContainer from '../../../../components/CommonDesignContainer';
import BoardingScrollComponent from '../../../../components/HomeScreenComponent/BoardingScrollComponent';

const BoardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View>
          <HomeScreenBackButton
            placeholder={'Boarding'}
            screen={'View Booking'}
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
            <BoardingScrollComponent data={Care} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});
