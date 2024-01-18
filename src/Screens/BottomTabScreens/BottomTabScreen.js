/* eslint-disable react-native/no-inline-styles */
import {
  View,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from './DashboardScreen';
import {SIZES} from '../../../constant/theme';
import FavouritesScreen from './FavouritesScreen';
import AddPetScreen from './AddPetScreen';
import ProfileScreen from './ProfileScreen';
import TransactionScreen from './TransactionScreen';
import {
  AddIcon,
  HomeIcon,
  HomeIconFocused,
  LikedIcon,
  LikedIconFocused,
  ProfileIcon,
  ProfileIconFocused,
  TransactionFocusedIcon,
  TransactionIcon,
} from '../SvgComponent/BottomSvgComponent';

import {useIsFocused} from '@react-navigation/native';
import BoardingScreen from './HomeScreens/BoardingScreen';
import PetCareScreen from '../BottomTabScreens/HomeScreens/PetCareScreen';
import SuppliesScreen from './HomeScreens/SuppliesScreen';
import GroomingScreen from './HomeScreens/GroomingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress, accessibilityState}) => {
  const isFocused = accessibilityState.selected;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        marginTop: -SIZES.width * 0.034,
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZES.width * 0.18,
        height: SIZES.width * 0.18,
        marginHorizontal: SIZES.width * 0.01,
      }}
      onPress={onPress}>
      <View
        style={{
          width: SIZES.width * 0.13,
          height: SIZES.width * 0.18,
          backgroundColor: 'transparent',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Homestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'push',
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 400,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 400,
            },
          },
        },
        cardStyleInterpolator: ({current, next, layouts}) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
                {
                  translateX: next
                    ? next.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -layouts.screen.width],
                      })
                    : 0,
                },
              ],
            },
            overflow: 'visible',
          };
        },
      }}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen
        options={{animation: 'slide_from_right'}}
        name="BoardingScreen"
        component={BoardingScreen}
      />
      <Stack.Screen
        options={{animation: 'slide_from_right'}}
        name="PetCareScreen"
        component={PetCareScreen}
      />
      <Stack.Screen
        options={{animation: 'slide_from_right'}}
        name="SuppliesScreen"
        component={SuppliesScreen}
      />
      <Stack.Screen
        options={{animation: 'slide_from_right'}}
        name="GroomingScreen"
        component={GroomingScreen}
      />
    </Stack.Navigator>
  );
};

const FavouriteStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};

const AddPetStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddPetScreen" component={AddPetScreen} />
    </Stack.Navigator>
  );
};

const Profilestack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const TransactionStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
    </Stack.Navigator>
  );
};

const BottomTabScreen = () => {
  const isAddPetStackFocused = useIsFocused();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -SIZES.width * 0.245}>
      <Tab.Navigator
        initialRouteName="DashboardScreen"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            position: 'relative',
            alignItems: 'center',
            height: Platform.OS === 'ios' ? 100 : SIZES.height * 0.1,
            borderRadius: 0,
            elevation: Platform.OS === 'ios' ? 3 : 20,
            paddingHorizontal: SIZES.width * 0.028,
            shadowOffset: {
              shadowOffset: {
                width: 0,
                height: Platform.OS === 'ios' ? -10 : -20,
              },
            },
            shadowOpacity: Platform.OS === 'ios' ? 0.09 : 0.3,
            shadowRadius: 10,
            boxShadow: '0px 1px 25px 6px rgba(0, 0, 0, 0.06)',
          },
        }}>
        <Tab.Screen
          name="Homestack"
          component={Homestack}
          options={{
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({color, size, focused}) =>
              focused ? <HomeIconFocused /> : <HomeIcon />,
          }}
        />
        <Tab.Screen
          name="FavouriteStack"
          component={FavouriteStack}
          options={{
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,

            tabBarIcon: ({color, size, focused}) =>
              focused ? <LikedIconFocused /> : <LikedIcon />,
          }}
        />
        <Tab.Screen
          name="AddPetStack"
          component={AddPetStack}
          options={{
            tabBarShowLabel: false,
            // tabBarStyle: {display: 'none'},
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({color, size, focused}) =>
              focused ? <AddIcon /> : <AddIcon />,
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="TransactionStack"
          component={TransactionStack}
          options={{
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({color, size, focused}) =>
              focused ? <TransactionFocusedIcon /> : <TransactionIcon />,
          }}
        />
        <Tab.Screen
          name="Profilestack"
          component={Profilestack}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color, size, focused}) =>
              focused ? <ProfileIconFocused /> : <ProfileIcon />,
          }}
        />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

export default BottomTabScreen;
