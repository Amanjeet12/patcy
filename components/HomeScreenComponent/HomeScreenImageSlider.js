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
          marginTop: 10,
          alignItems: 'center',
          height: 100,
          backgroundColor: '#fff',
        }}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={styles.thumbnailContainer}
        />
        <TouchableOpacity style={{position: 'absolute', left: 30, top: 40}}>
          <ArrowLeft />
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', right: 30, top: 40}}>
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
    height: 80,
    marginTop: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  selectedImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    backgroundColor: '#fff',
    padding: 25,
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default HomeScreenImageSlider;
