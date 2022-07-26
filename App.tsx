import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {Tabs} from './src/navigatior/Tabs';
import {DrawerNavigatorCustom} from './src/navigatior/DrawerNavigatorCustom';
// import {MyDrawer} from './src/navigatior/DrawerNavigator';
// import {StackNavigator} from './src/navigatior/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MyDrawer /> */}
      <DrawerNavigatorCustom />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
