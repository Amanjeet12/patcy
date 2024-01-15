/* eslint-disable react/self-closing-comp */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  CloseButton,
  FilterIcon,
} from '../../src/Screens/SvgComponent/Logocomponent';
import RBSheet from 'react-native-raw-bottom-sheet';
import Slider from '@react-native-community/slider';
import {COLORS, SIZES} from '../../constant/theme';
import {FilterService} from '../../constant/data';
import Check from 'react-native-vector-icons/AntDesign';

const data = [
  {
    id: '1',
    rating: '4.5+',
  },
  {
    id: '2',
    rating: '4.0+',
  },
  {
    id: '3',
    rating: '3.0+',
  },
  {
    id: '4',
    rating: '2.5+',
  },
  {
    id: '6',
    rating: '2.0+',
  },
];

const FilterIconComponent = () => {
  const refRBSheet = useRef();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState('50%');
  const [distance, setDistance] = useState(false);
  const [availabilty, setAvailability] = useState(false);
  const [active, setactive] = useState(null);
  const [rating, setRating] = useState(null);

  const handleItem = ItemId => {
    setactive(ItemId);
  };

  const handleRating = itemId => {
    setRating(itemId);
  };

  const handleSliderChange = values => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const handleOpenBottomSheet = item => {
    if (refRBSheet.current) {
      refRBSheet.current.open();
    }
  };
  const handleCloseBottomSheet = item => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };

  const handleDistance = () => {
    setDistance(!distance);
  };

  const handleAvailabilty = () => {
    setAvailability(!availabilty);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => handleOpenBottomSheet()}>
        <FilterIcon />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={SIZES.height - 20}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.30)',
          },
          draggableIcon: {
            backgroundColor: '#D9D9D9',
            width: 80,
            height: 5,
          },
        }}>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.title}>Filter</Text>
            <View style={{marginTop: 20}}>
              <Text style={[styles.text, {color: '#8C8C8C'}]}>
                Grooming Service
              </Text>
              <View style={styles.flexContainer}>
                {FilterService.map((item, index) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.boxContainer,
                      {backgroundColor: active === item.id ? 'red' : '#fff'},
                    ]}
                    onPress={() => handleItem(item.id)}>
                    <Text
                      style={[
                        styles.text,
                        {
                          fontWeight: '400',
                          color: active === item.id ? '#fff' : '#000',
                        },
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.borderColor} />
          <View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.text, {color: '#8C8C8C'}]}>
                Availability
              </Text>
              <View
                style={[
                  styles.flexContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <Text style={[styles.title, {fontSize: 12}]}>
                  Filter by availabilty
                </Text>
                <TouchableOpacity
                  style={{
                    width: 25,
                    height: 25,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: availabilty === true ? 'red' : '#fff',
                  }}
                  onPress={() => handleAvailabilty()}>
                  {availabilty === true ? (
                    <Check name={'check'} color={'#fff'} size={24} />
                  ) : null}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.borderColor} />
          <View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.text, {color: '#8C8C8C'}]}>Distance</Text>
              <View
                style={[
                  styles.flexContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <Text style={[styles.title, {fontSize: 12}]}>
                  Filter by distance
                </Text>
                <TouchableOpacity
                  style={{
                    width: 25,
                    height: 25,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: distance === true ? 'red' : '#fff',
                  }}
                  onPress={() => handleDistance()}>
                  {distance === true ? (
                    <Check name={'check'} color={'#fff'} size={24} />
                  ) : null}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.borderColor} />
          <View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.text, {color: '#8C8C8C'}]}>Price range</Text>
              <View
                style={[
                  styles.flexContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <Text style={[styles.title, {fontSize: 12}]}>AED 10</Text>
                <Text style={[styles.title, {fontSize: 12}]}>AED 10,000</Text>
              </View>
              <View>
                <Slider
                  style={{width: '100%', height: 40}}
                  values={0.5}
                  onValuesChange={handleSliderChange}
                  minimumValue={0}
                  maximumValue={100}
                  thumbTintColor="#F84040"
                  selectedStyle={{backgroundColor: '#F84040'}}
                  unselectedStyle={{backgroundColor: '#F84040'}}
                />
              </View>
            </View>
          </View>
          <View style={styles.borderColor} />
          <View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.text, {color: '#8C8C8C'}]}>Rating</Text>
              <View style={styles.flexContainer}>
                {data.map((item, index) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.boxContainer,
                      {
                        backgroundColor: rating === item.id ? 'red' : '#FFF0F0',
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                      },
                    ]}
                    onPress={() => handleRating(item.id)}>
                    <Text
                      style={[
                        styles.text,
                        {
                          fontWeight: '400',
                          color: rating === item.id ? '#fff' : '#000',
                        },
                      ]}>
                      {item.rating}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.borderColor} />
        </View>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => handleCloseBottomSheet()}>
            <CloseButton />
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', bottom: 10, paddingHorizontal: 16}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleCloseBottomSheet()}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export default FilterIconComponent;

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  flexDireaction: {
    flexDirection: 'row',
  },
  text: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
    color: '#121212',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  boxContainer: {
    marginLeft: 10,
    borderWidth: 0.3,
    borderColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3,
    marginBottom: 10,
  },
  borderColor: {
    height: 0.5,
    backgroundColor: '#FFC6C6',
    marginTop: 20,
  },
  button: {
    height: 50,
    backgroundColor: COLORS.btn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 32,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 25,
  },
});
