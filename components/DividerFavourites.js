import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SuppliesContainer from './SuppliesContainer';
import CommonDesignContainer from './CommonDesignContainer';
import {Care, supples} from '../constant/data';

const DividerFavourites = ({data}) => {
  if (!data || !data.length) {
    return null;
  }

  const itemName = data[0].name;

  return (
    <View>
      {itemName === 'Supplies' ? (
        <SuppliesContainer data={supples} />
      ) : (
        <CommonDesignContainer data={Care} />
      )}
    </View>
  );
};

export default DividerFavourites;

const styles = StyleSheet.create({});
