import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './Shared/DrawerNavigator';

export default function App() 
{
  return (
    <NavigationContainer>
      {/* <StatusBar style="auto" /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
