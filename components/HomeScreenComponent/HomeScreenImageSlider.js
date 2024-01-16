/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  ArrowLeft,
  ArrowRight,
} from '../../src/Screens/SvgComponent/Logocomponent';
import {SIZES} from '../../constant/theme';

const HomeScreenImageSlider = ({data}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Set the initial selected image to the first item in the data array
    if (data.length > 0) {
      setSelectedImage(data[0]);
    }
  }, [data]);

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => setSelectedImage(item)}>
      <Image
        source={item.image} // Ensure item.image is the correct source (string or require statement)
        style={[
          styles.thumbnail,
          {
            borderColor: selectedImage === item ? '#F84040' : '#fff', // Compare entire objects
            borderWidth: 0.5,
          },
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedImage !== null && (
        <View style={styles.selectedImageContainer}>
          <Image source={selectedImage.image} style={styles.selectedImage} />
        </View>
      )}

      <View
        style={{
          marginTop: SIZES.width * 0.026,
          alignItems: 'center',
          height: SIZES.width * 0.26,
          backgroundColor: '#fff',
        }}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={styles.thumbnailContainer}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: SIZES.width * 0.026,
            top: SIZES.width * 0.102,
          }}>
          <ArrowLeft />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: SIZES.width * 0.026,
            top: SIZES.width * 0.102,
          }}>
          <ArrowRight />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnailContainer: {
    height: SIZES.width * 0.205,
    marginTop: SIZES.width * 0.026,
  },
  thumbnail: {
    width: SIZES.width * 0.18,
    height: SIZES.width * 0.18,
    marginRight: SIZES.width * 0.026,
    justifyContent: 'center',
    borderRadius: SIZES.width * 0.026,
  },
  selectedImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.width * 0.64,
    backgroundColor: '#fff',
    padding: SIZES.width * 0.064,
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default HomeScreenImageSlider;
