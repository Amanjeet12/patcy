import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import BackChecker from '../../../../components/BackChecker';
import {SIZES} from '../../../../constant/theme';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <BackChecker placeholder={'About Petcy'} />

          <View>
            <View style={{paddingVertical: SIZES.width * 0.051}}>
              <Text style={styles.redText}>
                Welcome to Petcy: Your Pet Reward Platform!
              </Text>
            </View>
            <Text style={styles.description}>
              At Petcy, we believe that pets are more than just animals; they
              are beloved members of our families. We understand the joy,
              companionship, and unconditional love they bring into our lives,
              and we want to celebrate and reward that bond. About Us Petcy is a
              unique and innovative platform dedicated to all things pets.
              {'\n\n'}Our mission is to create a world where pets and their
              owners can thrive together, sharing unforgettable moments and
              experiences while enjoying exclusive rewards. Whether you have a
              loyal dog, a playful cat, a curious rabbit, or any other furry,
              feathered, or scaled companion, Petcy is here to make your pet's
              life even better. Our Vision Our vision is simple: to enhance the
              lives of pets and their owners by fostering a community of pet
              lovers and providing a platform that rewards your devotion and
              care. We believe in creating a space where pet owners can connect,
              share stories, find valuable resources, and, most importantly,
              earn rewards for their dedication to their pets. What We Offer
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  mainContainer: {
    paddingHorizontal: SIZES.width * 0.041,
  },
  description: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
    color: '#000',
  },
  redText: {
    fontSize: SIZES.width * 0.036,
    fontWeight: '500',
    fontFamily: 'Visby-Medium',
    color: '#D52C17',
  },
});
