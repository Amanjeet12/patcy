import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackChecker from '../../../components/BackChecker';
import Searchbar from '../../../components/Searchbar';
import FavouritesSlider from '../../../components/FavouritesSlider';
import DividerFavourites from '../../../components/DividerFavourites';
import {fav, pet} from '../../../constant/data';
import {SIZES} from '../../../constant/theme';

const FavouritesScreen = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = item => {
    setSelectedItem(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <View style={styles.mainContainer}>
        <BackChecker placeholder={'Favouties'} />
        <Text style={styles.title}>Pet products and centers you liked</Text>
        <View
          style={{
            marginTop: SIZES.width * 0.051,
            marginBottom: SIZES.width * 0.026,
          }}>
          <Searchbar />
        </View>
      </View>
      <View style={{marginBottom: SIZES.width * 0.026}}>
        <FavouritesSlider data={fav} onSelectItem={handleSelectItem} />
      </View>
      <View>
        <DividerFavourites data={selectedItem ? [selectedItem] : null} />
      </View>
    </SafeAreaView>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.041,
  },
  title: {
    color: '#8C8C8C',
    fontSize: SIZES.width * 0.031,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
});
