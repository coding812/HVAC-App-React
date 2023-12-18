import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { DrawerLayoutAndroid } from 'react-native';

import Home from './Views/Home';
import CapCalc from './Views/CapCalc';

const Stack = createStackNavigator();

export default function App() 
{
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Capacitor Calculator" component={CapCalc} />
      </Stack.Navigator>


    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: 
//   {
//     flex: 1,
//     backgroundColor: 'yellow',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
