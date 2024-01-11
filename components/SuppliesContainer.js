import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {SIZES} from '../constant/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Like from 'react-native-vector-icons/FontAwesome';
import UnLike from 'react-native-vector-icons/FontAwesome';
import Add from 'react-native-vector-icons/Ionicons';

const SuppliesContainer = ({data}) => {
  const [likedItems, setLikedItems] = useState(data.map(item => item.id));

  const handleLikeToggle = itemId => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter(id => id !== itemId));
    } else {
      setLikedItems([...likedItems, itemId]);
    }
  };
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.flexBox}>
        <View>
          <Text
            style={[
              styles.title,
              {
                paddingHorizontal: 10,
                paddingVertical: 4,
                backgroundColor: '#FFC6C6',
                borderRadius: 32,
              },
            ]}>
            {item.offer}
          </Text>
        </View>
        <View>
          {likedItems.includes(item.id) ? (
            <UnLike
              name="heart"
              size={16}
              color={'#F84040'}
              onPress={() => handleLikeToggle(item.id)}
            />
          ) : (
            <Like
              name="heart-o"
              size={16}
              color={'#F84040'}
              onPress={() => handleLikeToggle(item.id)}
            />
          )}
        </View>
      </View>
      <View style={{width: '100%', height: 100, marginVertical: 5}}>
        <Image
          source={item.image}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>

      <Text style={styles.title}>{item.name}</Text>
      <Text style={[styles.title, {color: '#8C8C8C', paddingTop: 5}]}>
        {item.type}
      </Text>
      <View style={[styles.flexBox, {paddingTop: 5}]}>
        <View>
          <Text style={[styles.title, {color: '#F84040', fontWeight: '700'}]}>
            {item.price}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.addStyle}>
            <Add name="add-outline" size={16} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // Display two items in each row
      />
    </ScrollView>
  );
};

export default SuppliesContainer;

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    paddingBottom: 200,
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: SIZES.width / 2 - 30, // Adjusted width
    height: 230,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 20,
    margin: 10,
  },
  title: {
    color: '#121212',
    fontFamily: 'Visby-Medium',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'left',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addStyle: {
    width: 20,
    height: 20,
    backgroundColor: '#8c8c8c',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
