import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyDrawer} from './src/navigatior/DrawerNavigator';
// import {StackNavigator} from './src/navigatior/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
