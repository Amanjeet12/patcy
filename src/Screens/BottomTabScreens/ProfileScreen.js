import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ProfileBackButton from '../../../components/ProfileBackButton';
import ProfileImageContainer from '../../../components/ProfileImageContainer';
import Subscription from '../../../components/Subscription';
import YourPet from '../../../components/YourPet';
import {PetData} from '../../../constant/data';
import InnerSectionProfile from '../../../components/InnerSectionProfile';
import SupportProfile from '../../../components/SupportProfile';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <ProfileBackButton placeholder={'Profile'} />
          <View>
            <ProfileImageContainer />
          </View>
          <View>
            <Subscription />
          </View>
          <View style={{marginTop: SIZES.width * 0.064}}>
            <Text style={styles.title}>Your Pets</Text>
            <YourPet data={PetData} />
          </View>
          <View style={{marginTop: SIZES.width * 0.026}}>
            <Text style={styles.title}>Account Setting</Text>
            <InnerSectionProfile />
          </View>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <Text style={styles.title}>Support</Text>
            <SupportProfile />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.041,
    marginBottom: SIZES.width * 0.13,
  },
  title: {
    color: '#8C8C8C',
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
});
