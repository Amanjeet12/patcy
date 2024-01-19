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
        height={SIZES.height - 100}
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
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.title}>Filter</Text>
            <View style={{marginTop: SIZES.width * 0.051}}>
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
            <View style={{marginTop: SIZES.width * 0.051}}>
              <Text style={[styles.text, {color: '#8C8C8C'}]}>
                Availability
              </Text>
              <View
                style={[
                  styles.flexContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <Text style={[styles.title, {fontSize: SIZES.width * 0.031}]}>
                  Filter by availabilty
                </Text>
                <TouchableOpacity
                  style={{
                    width: SIZES.width * 0.064,
                    height: SIZES.width * 0.064,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: availabilty === true ? 'red' : '#fff',
                  }}
                  onPress={() => handleAvailabilty()}>
                  {availabilty === true ? (
                    <Check
                      name={'check'}
                      color={'#fff'}
                      size={SIZES.width * 0.062}
                    />
                  ) : null}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.borderColor} />
          <View>
            <View style={{marginTop: SIZES.width * 0.051}}>
              <Text style={[styles.text, {color: '#8C8C8C'}]}>Distance</Text>
              <View
                style={[
                  styles.flexContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <Text style={[styles.title, {fontSize: SIZES.width * 0.031}]}>
                  Filter by distance
                </Text>
                <TouchableOpacity
                  style={{
                    width: SIZES.width * 0.064,
                    height: SIZES.width * 0.064,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: distance === true ? 'red' : '#fff',
                  }}
                  onPress={() => handleDistance()}>
                  {distance === true ? (
                    <Check
                      name={'check'}
                      color={'#fff'}
                      size={SIZES.width * 0.062}
                    />
                  ) : null}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.borderColor} />
          <View>
            <View style={{marginTop: SIZES.width * 0.051}}>
              <Text style={[styles.text, {color: '#8C8C8C'}]}>Price range</Text>
              <View
                style={[
                  styles.flexContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <Text style={[styles.title, {fontSize: SIZES.width * 0.031}]}>
                  AED 10
                </Text>
                <Text style={[styles.title, {fontSize: SIZES.width * 0.031}]}>
                  AED 10,000
                </Text>
              </View>
              <View>
                <Slider
                  style={{width: '100%', height: SIZES.width * 0.102}}
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
            <View style={{marginTop: SIZES.width * 0.051}}>
              <Text style={[styles.text, {color: '#8C8C8C'}]}>Rating</Text>
              <View style={styles.flexContainer}>
                {data.map((item, index) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.boxContainer,
                      {
                        backgroundColor: rating === item.id ? 'red' : '#FFF0F0',
                        paddingHorizontal: SIZES.width * 0.039,
                        paddingVertical: SIZES.width * 0.026,
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
        <View
          style={{
            width: '100%',
            bottom: SIZES.width * 0.07,
            paddingHorizontal: SIZES.width * 0.041,
          }}>
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
    height: SIZES.width * 0.102,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.041,
    flex: 1,
  },
  flexDireaction: {
    flexDirection: 'row',
  },
  text: {
    color: '#000',
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  title: {
    fontSize: SIZES.width * 0.041,
    fontWeight: '600',
    fontFamily: 'VisbyRound-Bold',
    color: '#121212',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: SIZES.width * 0.026,
  },
  boxContainer: {
    marginLeft: SIZES.width * 0.026,
    borderWidth: 0.3,
    borderColor: 'red',
    paddingHorizontal: SIZES.width * 0.026,
    paddingVertical: SIZES.width * 0.009,
    borderRadius: SIZES.width * 0.009,
    marginBottom: SIZES.width * 0.026,
  },
  borderColor: {
    height: 0.5,
    backgroundColor: '#FFC6C6',
    marginTop: SIZES.width * 0.051,
  },
  button: {
    height: SIZES.width * 0.13,
    backgroundColor: COLORS.btn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.width * 0.026,
    padding: SIZES.width * 0.026,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
  closeButton: {
    width: SIZES.width * 0.077,
    height: SIZES.width * 0.077,
    borderRadius: 32,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: SIZES.width * 0.051,
    right: SIZES.width * 0.064,
  },
});
