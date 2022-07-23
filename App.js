import * as React from 'react';
import { View, Text,LogBox } from 'react-native';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Homescreen,Dashboard }from './src/screens';

const screenOptionStyle = {
  headerShown: false,
};
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle} useLegacyImplementation>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Homescreen" component={Homescreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
