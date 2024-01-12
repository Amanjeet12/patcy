/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {RedAddButon} from '../src/Screens/SvgComponent/Logocomponent';

const YourPet = ({data}) => {
  const [selectedPets, setSelectedPets] = useState([]);
  const animatedValues = useRef({}).current;

  useEffect(() => {
    const animations = selectedPets.map(petId => {
      return Animated.timing(animatedValues[petId], {
        toValue: selectedPets.includes(petId) ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      });
    });

    Animated.parallel(animations).start();
  }, [selectedPets]);

  const handlePetClick = petId => {
    setSelectedPets(prevSelectedPets => {
      if (prevSelectedPets.includes(petId)) {
        // If already selected, remove it
        return prevSelectedPets.filter(id => id !== petId);
      } else {
        // If not selected, add it
        return [...prevSelectedPets, petId];
      }
    });
  };

  const getInterpolatedScale = petId => {
    animatedValues[petId] = animatedValues[petId] || new Animated.Value(0);

    return animatedValues[petId].interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.05],
    });
  };

  const getAnimatedStyle = petId => {
    return {
      transform: [{scaleY: getInterpolatedScale(petId)}],
      opacity: animatedValues[petId],
    };
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {data.map(pet => (
        <TouchableOpacity
          key={pet.id}
          onPress={() => handlePetClick(pet.id)}
          activeOpacity={0.7}
          style={[
            styles.petItem,
            selectedPets.includes(pet.id) && styles.selectedPetItem,
            selectedPets.includes(pet.id) && getAnimatedStyle(pet.id),
          ]}>
          <Image source={pet.image} style={styles.petImage} />
          <Text
            style={[
              styles.petName,
              selectedPets.includes(pet.id) && styles.selectedPetItemFont,
            ]}>
            {pet.name}
          </Text>
          <Text
            style={[
              styles.petYear,
              selectedPets.includes(pet.id) && styles.selectedPetItemFontDes,
            ]}>
            {pet.year}
          </Text>
          {selectedPets.includes(pet.id) && (
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={[styles.petItem, {justifyContent: 'center'}]}>
        <RedAddButon />
        <Text
          style={[
            styles.petName,
            {fontWeight: '500', paddingTop: 14, fontSize: 14},
          ]}>
          Add new pet
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    height: 150,
  },
  petItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    height: 110,
    marginRight: 10,
    width: 95,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2, // For Android
  },
  selectedPetItem: {
    backgroundColor: '#ffc6c6',
    borderWidth: 1,
    borderColor: '#ffc6c6',
    height: 130,
    width: 100,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  petName: {
    fontWeight: '500',
    fontSize: 16,
    color: '#121212',
    fontFamily: 'Visby-Medium',
    lineHeight: 15,
    paddingTop: 4,
    textAlign: 'center',
  },
  petYear: {
    color: '#747474',
    fontSize: 10,
    fontFamily: 'Visby-Medium',
    lineHeight: 15,
    textAlign: 'center',
    fontWeight: '400',
  },
  viewButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 32,
    marginTop: 2,
  },
  viewButtonText: {
    color: '#000',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
  },
  selectedPetItemFont: {
    fontWeight: '500',
    fontSize: 16,
    color: '#121212',
    fontFamily: 'Visby-Medium',
    lineHeight: 15,
    paddingTop: 5,
    textAlign: 'center',
  },
  selectedPetItemFontDes: {
    color: '#747474',
    fontSize: 12,
    fontFamily: 'Visby-Medium',
    lineHeight: 15,
    textAlign: 'center',
    fontWeight: '400',
    paddingVertical: 2,
  },
});

export default YourPet;
