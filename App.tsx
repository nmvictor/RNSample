/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ContactInfoScreen} from './ContactInfoScreen';
import {ContactListScreen} from './ContactListScreen';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import Contact from './models/Contact';

const Stack = createStackNavigator();

export type AppStackNavigatorParamList = {
  Home: undefined;
  ContactInfo: {item: Contact};
};

export enum RouteNames {
  Home = 'Home',
  ContactInfo = 'ContactInfo',
}

export type ContactInfoNavigationProps = StackScreenProps<
  AppStackNavigatorParamList,
  RouteNames.ContactInfo
>;

class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={RouteNames.Home}
              component={ContactListScreen}
            />
            <Stack.Screen
              name={RouteNames.ContactInfo}
              component={ContactInfoScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
