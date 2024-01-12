/* eslint-disable react/self-closing-comp */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splashscreen from './src/Screens/OnboardingScreens/Splashscreen';
import Loginscreen from './src/Screens/LoginScreen/Loginscreen';
import IntroScreen from './src/Screens/OnboardingScreens/IntroScreen';
import OnboardingScreen from './src/Screens/OnboardingScreens/OnboardingScreen';
import OtpScreen from './src/Screens/LoginScreen/OtpScreen';
import VerifiedScreen from './src/Screens/LoginScreen/VerifiedScreen';
import DashboardScreen from './src/Screens/BottomTabScreens/DashboardScreen';
import MailAuthScreen from './src/Screens/LoginScreen/MailAuthScreen';
import SignUpScreen from './src/Screens/SingUpScreens/SignUpScreen';
import SignUpOtpScreen from './src/Screens/SingUpScreens/SingUpOtpScreen';
import SingUpVerifiedScreen from './src/Screens/SingUpScreens/SingUpVerifiedScreen';
import SingUpCompleteScreen from './src/Screens/SingUpScreens/SingUpCompleteScreen';
import BottomTabScreen from './src/Screens/BottomTabScreens/BottomTabScreen';
import EditScreen from './src/Screens/BottomTabScreens/ProfileScreens/EditScreen';
import SubscriptionScreen from './src/Screens/BottomTabScreens/ProfileScreens/SubscriptionScreen';
import AboutScreen from './src/Screens/BottomTabScreens/ProfileScreens/AboutScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
              // Exclude FlatList components from the animation
              overflow: 'visible',
            };
          },
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splashscreen"
          component={Splashscreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="Loginscreen"
          component={Loginscreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="IntroScreen"
          component={IntroScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="OtpScreen"
          component={OtpScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="VerifiedScreen"
          component={VerifiedScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="DashboardScreen"
          component={DashboardScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="MailAuthScreen"
          component={MailAuthScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="SignUpScreen"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="SignUpOtpScreen"
          component={SignUpOtpScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="SingUpVerifiedScreen"
          component={SingUpVerifiedScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="SingUpCompleteScreen"
          component={SingUpCompleteScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="BottomTabScreen"
          component={BottomTabScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="EditScreen"
          component={EditScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="SubscriptionScreen"
          component={SubscriptionScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="AboutScreen"
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
