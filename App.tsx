import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {Tabs} from './src/navigatior/Tabs';
import {DrawerNavigatorCustom} from './src/navigatior/DrawerNavigatorCustom';
import {AuthProvider} from './src/context/AuthContext';
// import {MyDrawer} from './src/navigatior/DrawerNavigator';
// import {StackNavigator} from './src/navigatior/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <MyDrawer /> */}
        <DrawerNavigatorCustom />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
