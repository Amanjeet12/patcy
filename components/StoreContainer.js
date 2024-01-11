import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const StoreContainer = ({data}) => {
  const renderBox = item => (
    <TouchableOpacity
      key={item.id}
      style={[styles.box, {backgroundColor: item.backgroundColor}]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderRow = (rowData, rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      {rowData.map(renderBox)}
    </View>
  );

  // Split the data into rows with 4 items each
  const rows = [];
  for (let i = 0; i < data.length; i += 4) {
    const rowSlice = data.slice(i, i + 4);
    rows.push(rowSlice);
  }

  return <View style={styles.container}>{rows.map(renderRow)}</View>;
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 10,
  },
  box: {
    flexBasis: '23%', // Adjusted flexBasis to fit 4 boxes in a row with some spacing
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 54,
    height: 54,
    resizeMode: 'cover',
    marginBottom: 7,
    borderRadius: 32,
  },
  title: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
    color: '#000',
    marginTop: 5,
  },
});

export default StoreContainer;
