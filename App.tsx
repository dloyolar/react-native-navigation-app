import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigatorCustom} from './src/navigatior/DrawerNavigatorCustom';
// import {MyDrawer} from './src/navigatior/DrawerNavigator';
// import {StackNavigator} from './src/navigatior/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MyDrawer /> */}
      <DrawerNavigatorCustom />
    </NavigationContainer>
  );
};

export default App;
