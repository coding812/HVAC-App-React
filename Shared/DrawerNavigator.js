import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Views/Home';
import CapCalcScreen from '../Views/CapCalc';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => 
{
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Capacitor Calculator" component={CapCalcScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
