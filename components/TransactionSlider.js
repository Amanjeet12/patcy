/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Clock,
  QuestionMark,
  Redcheck,
  Threedot,
} from '../src/Screens/SvgComponent/Logocomponent';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SIZES} from '../constant/theme';

const DividerContent = ({title, des, color}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: SIZES.width * 0.039,
      }}>
      <Text
        style={[
          styles.title,
          {color: color ? color : '#8C8C8C', fontSize: SIZES.width * 0.031},
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.title,
          {
            color: color ? color : '#121212',
            fontSize: SIZES.width * 0.031,
            fontWeight: '600',
          },
        ]}>
        {des}
      </Text>
    </View>
  );
};

const TransactionSlider = ({data}) => {
  const refRBSheet = useRef();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenBottomSheet = item => {
    setSelectedItem(item);
    if (refRBSheet.current) {
      refRBSheet.current.open();
    }
  };

  const handleCloseSheet = () => {
    setSelectedItem(null);
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View style={{width: '20%'}}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={{width: '59%', gap: SIZES.width * 0.013}}>
        <Text style={[styles.title, {color: '#000', fontWeight: '700'}]}>
          {item.name}
        </Text>
        <Text style={[styles.title, {color: '#8C8C8C'}]}>{item.type}</Text>
        <View style={styles.flexBox}>
          <View style={[styles.flexBox, {gap: SIZES.width * 0.026}]}>
            <Clock />
            <Text style={styles.title}>{item.timing}</Text>
          </View>
          <Text style={styles.title}>{item.date}</Text>
        </View>
      </View>
      <View
        style={{
          width: '15%',
          justifyContent: 'center',
          gap: SIZES.width * 0.013,
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.title,
            {color: '#000', fontWeight: '700', fontSize: SIZES.width * 0.031},
          ]}>
          {item.actuallPrice}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
          <Redcheck />
          <Text style={[styles.title, {color: '#F84040'}]}>
            {item.discount}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '6%',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        onPress={() => handleOpenBottomSheet(item)}>
        <Threedot />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom: SIZES.width * 0.26}}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={SIZES.height * 0.64}
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
        <View style={styles.bottomContainer}>
          <View
            style={{
              height: SIZES.width * 0.13,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.redText}>Tranaction Details</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.tranctionIdContainer}>
            <View>
              <Text style={styles.title}>Outlet:</Text>
              <Text
                style={[
                  styles.title,
                  {fontWeight: '700', paddingTop: SIZES.width * 0.013},
                ]}>
                {selectedItem?.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: SIZES.width * 0.026,
                  paddingTop: SIZES.width * 0.026,
                }}>
                <Text style={[styles.title, {color: '#F84040'}]}>
                  Transaction ID:
                </Text>
                <Text
                  style={[styles.title, {color: '#F84040', fontWeight: '700'}]}>
                  XDJIAHGS
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.successfull}>Successful</Text>
            </View>
          </View>
          <View style={{marginTop: SIZES.width * 0.064}}>
            <Text style={styles.title}>Billing Details</Text>
            <View
              style={{
                height: SIZES.width * 0.382,
                backgroundColor: '#F6F6F6',
                marginTop: SIZES.width * 0.026,
                paddingHorizontal: SIZES.width * 0.039,
                paddingVertical: SIZES.width * 0.051,
              }}>
              <DividerContent title={'Bill Amount'} des={'AED 175'} />
              <DividerContent title={'Time'} des={'18 Oct 2023, 10:30pm'} />
              <DividerContent title={'Payment Method'} des={'BNPL'} />
              <DividerContent
                title={'You Saved'}
                des={'AED 50'}
                color={'#F84040'}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: SIZES.width * 0.062,
            flexDirection: 'row',
            justifyContent: 'center',
            gap: SIZES.width * 0.013,
          }}>
          <QuestionMark />
          <Text style={styles.redText}> Need Help</Text>
        </TouchableOpacity>
      </RBSheet>
    </>
  );
};

export default TransactionSlider;

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.width * 0.26,
  },
  item: {
    paddingHorizontal: SIZES.width * 0.026,
    marginVertical: SIZES.width * 0.013,
    marginHorizontal: SIZES.width * 0.041,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: SIZES.width * 0.039,
  },
  image: {
    width: SIZES.width * 0.13,
    height: SIZES.width * 0.13,
    borderRadius: 12,
  },
  title: {
    color: '#121212',
    fontSize: SIZES.width * 0.026,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.width * 0.051,
  },
  bottomContainer: {
    paddingHorizontal: SIZES.width * 0.051,
  },
  redText: {
    color: '#F84040',
    fontSize: SIZES.width * 0.031,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
  },
  border: {
    height: 0.5,
    backgroundColor: '#8C8C8C',
    width: '100%',
  },
  tranctionIdContainer: {
    height: SIZES.width * 0.25,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    marginTop: SIZES.width * 0.077,
    paddingHorizontal: SIZES.width * 0.039,
    paddingVertical: SIZES.width * 0.051,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  successfull: {
    fontSize: SIZES.width * 0.026,
    color: '#000',
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
    paddingHorizontal: SIZES.width * 0.039,
    paddingVertical: SIZES.width * 0.013,
    backgroundColor: '#E6FFDF',
    borderRadius: 15,
  },
});
