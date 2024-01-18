/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Calendar} from 'react-native-calendars';
import {SIZES} from '../../constant/theme';

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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: SIZES.width * 0.026,
        }}>
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
        height={SIZES.height * 0.511}
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
        <View>
          <Calendar
            style={{
              borderColor: 'gray',
              height: SIZES.height * 0.486,
              margin: SIZES.width * 0.026,
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: 'grey',
              selectedDayBackgroundColor: 'red',
              selectedDayTextColor: '#ffffff',
              todayTextColor: 'red',
              dayTextColor: '#2d4150',
              textDisabledColor: '#ACACAC',
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
    height: SIZES.width * 0.18,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.width * 0.036,
  },
  description: {
    fontSize: SIZES.width * 0.026,
    fontWeight: '400',
    color: '#8C8C8C',
    fontFamily: 'Visby-Medium',
  },
  selectedBox: {
    color: '#000',
    fontSize: SIZES.width * 0.026,
    lineHeight: SIZES.width * 0.041,
    paddingVertical: SIZES.width * 0.013,
    paddingHorizontal: SIZES.width * 0.031,
    backgroundColor: '#FFC6C6',
    borderRadius: SIZES.width * 0.013,
    // fontWeight: '700',
  },
});
