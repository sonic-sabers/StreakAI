


import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const screenOptionStyle = {
  headerShown: false,
};


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
