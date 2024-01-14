/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Calendar} from 'react-native-calendars';

const HomeScreenSingleDateSelecter = () => {
  const refRBSheet = useRef();

  const [checkInDate, setCheckInDate] = useState('');

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

  const handleDayPress = (day, type) => {
    if (type === 'checkIn') {
      setCheckInDate(day.dateString);
    }

    handleCloseSheet();
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Text style={styles.description}>Check In</Text>
        <TouchableOpacity onPress={() => handleOpenBottomSheet()}>
          <Text style={[styles.description, styles.selectedBox]}>
            {checkInDate || 'Select Date'}
          </Text>
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={370}
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
        <View>
          <Calendar
            style={{
              borderColor: 'gray',
              height: 350,
              margin: 10,
            }}
            onDayPress={day => handleDayPress(day, 'checkIn')}
          />
        </View>
      </RBSheet>
    </View>
  );
};

export default HomeScreenSingleDateSelecter;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },
  description: {
    fontSize: 10,
    fontWeight: '400',
    color: '#8C8C8C',
    fontFamily: 'Visby-Medium',
  },
  selectedBox: {
    color: '#000',
    fontSize: 10,
    lineHeight: 16,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: '#FFC6C6',
    borderRadius: 5,
    fontWeight: '700',
  },
});
