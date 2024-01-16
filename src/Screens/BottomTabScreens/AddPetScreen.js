/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useCallback, useMemo, useRef} from 'react';
import Backbutton from '../../../components/Backbutton';
import ImageUploader from '../../../components/ImageUploader';
import PetList from '../../../components/PetList';
import {pet} from '../../../constant/data';
import CommonContainer from '../../../components/CommonContainer';
import {COLORS} from '../../../constant/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import BackChecker from '../../../components/BackChecker';

const DividerContainer = ({left, right}) => {
  return (
    <View style={styles.divider}>
      <Text style={styles.title}>{left}</Text>
      <Text
        style={[
          styles.title,
          {color: '#121212', textAlign: 'right', fontWeight: '600'},
        ]}>
        {right}
      </Text>
    </View>
  );
};

const AddPetScreen = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemGender, setSelectedItemGender] = useState(null);
  const refRBSheet = useRef();

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

  const handleOpenBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.open();
    }
  };

  const handleCloseSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };
  const handleCloseNavigation = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
      navigation.navigate('SuccessfullScreen');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />

      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.mainContainer}>
            <BackChecker placeholder={'Add Pet'} />
          </View>
          <View style={{marginTop: SIZES.width * 0.013}}>
            <View style={{paddingHorizontal: SIZES.width * 0.041}}>
              <Text style={styles.title}>Provide the details of your pet</Text>
              <ImageUploader />
            </View>
            <View style={{}}>
              <Text style={[styles.title, {paddingHorizontal: SIZES.width * 0.041}]}>
                Choose a pet
              </Text>
              <PetList data={pet} onSelectItem={handleSelectItem} />
            </View>
            <View style={styles.padding}>
              <Text style={styles.title}>What’s your pet’s name?</Text>
              <View style={{marginTop: SIZES.width * 0.013}}>
                <CommonContainer placeholder={'Enter pet name'} />
              </View>
            </View>
            <View style={styles.padding}>
              <Text style={styles.title}>What’s your pet’s name?</Text>
              <View style={{marginTop: SIZES.width * 0.013}}>
                <CommonContainer placeholder={'Enter pet name'} />
              </View>
            </View>
            <View style={{marginTop: SIZES.width * 0.051}}>
              <Text style={[styles.title, {paddingHorizontal: 16}]}>
                Choose pet's gender
              </Text>
              <PetList data={Gender} onSelectItem={handleSelectItemGender} />
            </View>
            <View style={{marginTop: SIZES.width * 0.051}}>
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
              <View style={{marginTop: SIZES.width * 0.013}}>
                <CommonContainer placeholder={'Enter the age'} />
              </View>
            </View>
            <View style={[styles.buttonContainer, {marginBottom: 50}]}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleOpenBottomSheet()}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={500}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.30)',
          },
          draggableIcon: {
            backgroundColor: '#D9D9D9',
            width: SIZES.width * 0.205,
            height: SIZES.width * 0.013,
          },
        }}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, {color: '#F84040'}]}>
              Confirm pet details
            </Text>
          </View>
          <View style={{paddingHorizontal: SIZES.width * 0.041}}>
            <DividerContainer left={'Pet Type'} right={'Dog'} />
            <DividerContainer left={'Pet Name'} right={'Winner'} />
            <DividerContainer left={'Pet Age'} right={'8 Years'} />
            <DividerContainer left={'Pet Gender'} right={'male'} />
            <DividerContainer left={'Pet Size'} right={'20 Kg'} />
            <DividerContainer left={'Appointment Date'} right={'20 Feb 2020'} />
            <DividerContainer left={'Vaccination Details'} right={'2 years'} />
          </View>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              bottom: SIZES.width * 0.205,
              paddingHorizontal: SIZES.width * 0.041,
            }}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#FFC6C6'}]}
              onPress={() => handleCloseSheet()}>
              <Text style={[styles.buttonText, {color: '#D52C17'}]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              bottom: SIZES.width * 0.051,
              paddingHorizontal: SIZES.width * 0.041,
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleCloseNavigation()}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
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
    paddingHorizontal: SIZES.width * 0.041,
  },
  title: {
    color: '#8C8C8C',
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  flexContainer: {
    marginTop: SIZES.width * 0.013,
    paddingHorizontal: SIZES.width * 0.041,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.width * 0.051,
  },
  padding: {marginTop: SIZES.width * 0.051, paddingHorizontal: SIZES.width * 0.041},
  button: {
    height: SIZES.width * 0.13,
    backgroundColor: COLORS.btn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: SIZES.width * 0.026,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  buttonContainer: {
    marginHorizontal: SIZES.width * 0.041,
    marginBottom: SIZES.width * 0.077,
    marginTop: SIZES.width * 0.051,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottomSheetContainer: {
    flex: 1,
  },
  titleContainer: {
    height: SIZES.width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: '#8C8C8C',
    marginHorizontal: SIZES.width * 0.041,
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.width * 0.041,
  },
});
