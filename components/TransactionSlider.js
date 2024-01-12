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

const DividerContent = ({title, des, color}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
      }}>
      <Text
        style={[
          styles.title,
          {color: color ? color : '#8C8C8C', fontSize: 12},
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.title,
          {color: color ? color : '#121212', fontSize: 12, fontWeight: '600'},
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
      <View style={{width: '59%', gap: 5}}>
        <Text style={[styles.title, {color: '#000', fontWeight: '700'}]}>
          {item.name}
        </Text>
        <Text style={[styles.title, {color: '#8C8C8C'}]}>{item.type}</Text>
        <View style={styles.flexBox}>
          <View style={[styles.flexBox, {gap: 10}]}>
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
          gap: 5,
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.title,
            {color: '#000', fontWeight: '700', fontSize: 12},
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
          contentContainerStyle={{paddingBottom: 100}}
        />
      </View>
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
            width: 80,
            height: 5,
          },
        }}>
        <View style={styles.bottomContainer}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.redText}>Tranaction Details</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.tranctionIdContainer}>
            <View>
              <Text style={styles.title}>Outlet:</Text>
              <Text style={[styles.title, {fontWeight: '700', paddingTop: 5}]}>
                {selectedItem?.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  paddingTop: 10,
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
          <View style={{marginTop: 25}}>
            <Text style={styles.title}>Billing Details</Text>
            <View
              style={{
                height: 150,
                backgroundColor: '#F6F6F6',
                marginTop: 10,
                paddingHorizontal: 15,
                paddingVertical: 20,
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
            marginTop: 24,
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5,
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
    marginBottom: 100,
  },
  item: {
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  title: {
    color: '#121212',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
  },
  flexBox: {flexDirection: 'row', alignItems: 'center', gap: 20},
  bottomContainer: {
    paddingHorizontal: 20,
  },
  redText: {
    color: '#F84040',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
  },
  border: {
    height: 0.5,
    backgroundColor: '#8C8C8C',
    width: '100%',
  },
  tranctionIdContainer: {
    height: 98,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    marginTop: 30,
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  successfull: {
    fontSize: 10,
    color: '#000',
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#E6FFDF',
    borderRadius: 15,
  },
});
