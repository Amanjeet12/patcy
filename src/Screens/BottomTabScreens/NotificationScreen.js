import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import BackChecker from '../../../components/BackChecker';
import {Notifications} from '../../../constant/data';
import {SIZES} from '../../../constant/theme';

const NotificationScreen = () => {
  console.log(Notifications);

  const renderItem = ({item}) => {
    const titleParts = item.title.split(' ');
    const lastThreeWords = titleParts.slice(-3).join(' ');
    const remainingTitle = titleParts.slice(0, -3).join(' ');

    return (
      <View style={styles.notificationItem}>
        <Image source={item.image} style={styles.notificationImage} />
        <View style={styles.notificationText}>
          <Text style={styles.description}>
            {remainingTitle}{' '}
            <Text style={styles.lastThreeWords}>{lastThreeWords}</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.description}>{item.timing}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <BackChecker placeholder={'Notifications'} />
        <FlatList
          data={Notifications}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  container: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.041,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.width * 0.039,
    borderBottomWidth: 0.5,
    borderBottomColor: '#8C8C8C',
  },
  notificationImage: {
    width: SIZES.width * 0.13,
    height: SIZES.width * 0.13,
    borderRadius: SIZES.width * 0.051,
    marginRight: SIZES.width * 0.026,
    marginTop: SIZES.width * 0.026,
  },
  notificationText: {
    flex: 1,
  },
  description: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
    color: '#000',
  },
  lastThreeWords: {
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    fontFamily: 'Visby-Medium',
    color: 'red', // Change the color to your desired color
  },
});

export default NotificationScreen;
