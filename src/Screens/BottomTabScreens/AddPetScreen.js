/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Backbutton from '../../../components/Backbutton';
import ImageUploader from '../../../components/ImageUploader';
import PetList from '../../../components/PetList';
import {pet} from '../../../constant/data';
import CommonContainer from '../../../components/CommonContainer';

const AddPetScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemGender, setSelectedItemGender] = useState(null);

  const handleSelectItem = item => {
    console.log(item);
    setSelectedItem(item);
  };
  const handleSelectItemGender = item => {
    setSelectedItemGender(item);
  };

  const Gender = [
    {id: '1', name: 'Male'},
    {id: '2', name: 'Female'},
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <Backbutton />
        </View>
        <View style={{marginTop: 5}}>
          <View style={{paddingHorizontal: 16}}>
            <Text style={styles.title}>Provide the details of your pet</Text>
            <ImageUploader />
          </View>
          <View style={{}}>
            <Text style={[styles.title, {paddingHorizontal: 16}]}>
              Choose a pet
            </Text>
            <PetList data={pet} onSelectItem={handleSelectItem} />
          </View>
          <View style={styles.padding}>
            <Text style={styles.title}>What’s your pet’s name?</Text>
            <View style={{marginTop: 5}}>
              <CommonContainer placeholder={'Enter pet name'} />
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={styles.title}>What’s your pet’s name?</Text>
            <View style={{marginTop: 5}}>
              <CommonContainer placeholder={'Enter pet name'} />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={[styles.title, {paddingHorizontal: 16}]}>
              Choose pet's gender
            </Text>
            <PetList data={Gender} onSelectItem={handleSelectItemGender} />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={[styles.title, {paddingHorizontal: 16}]}>
              What is your pet size?
            </Text>
            <View style={styles.flexContainer}>
              <View style={{width: '50%'}}>
                <CommonContainer placeholder={'Enter pet size'} />
              </View>
              <Text style={[styles.title, {fontSize: 16}]}>Kg</Text>
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={styles.title}>Vaccination details</Text>
            <View style={{marginTop: 5}}>
              <CommonContainer placeholder={'Enter the age'} />
            </View>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddPetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: 16,
  },
  title: {
    color: '#8C8C8C',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  flexContainer: {
    marginTop: 5,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  padding: {marginTop: 20, paddingHorizontal: 16},
});
