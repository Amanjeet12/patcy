import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FilterIcon} from '../../src/Screens/SvgComponent/Logocomponent';

const FilterIconComponent = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <FilterIcon />
    </TouchableOpacity>
  );
};

export default FilterIconComponent;

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
