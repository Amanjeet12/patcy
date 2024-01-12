import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SuppliesContainer from './SuppliesContainer';
import CommonDesignContainer from './CommonDesignContainer';
import {Care, supples, Grooming} from '../constant/data';

const DividerFavourites = ({data}) => {
  if (!data || !data.length) {
    return null;
  }

  const itemName = data[0].name;
  const containerData = itemName === 'Grooming' ? Grooming : Care;

  return (
    <View>
      {itemName === 'Supplies' ? (
        <SuppliesContainer data={supples} />
      ) : (
        <CommonDesignContainer data={containerData} />
      )}
    </View>
  );
};

export default DividerFavourites;

const styles = StyleSheet.create({});
