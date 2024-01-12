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
import {Tranaction, TransactionData, fav} from '../../../constant/data';
import TransactionSlider from '../../../components/TransactionSlider';

const TransactionScreen = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = item => {
    setSelectedItem(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <View style={styles.mainContainer}>
        <BackChecker placeholder={'Transactions'} />
        <Text style={styles.title}>Your recent savings and transactions</Text>
        <View style={{marginTop: 20, marginBottom: 10}}>
          <Searchbar />
        </View>
      </View>
      <View style={{marginBottom: 10}}>
        <FavouritesSlider
          data={TransactionData}
          onSelectItem={handleSelectItem}
        />
      </View>
      <View>
        <TransactionSlider data={Tranaction} />
      </View>
    </SafeAreaView>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: 16,
  },
  title: {
    color: '#8C8C8C',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Visby-Medium',
  },
});
