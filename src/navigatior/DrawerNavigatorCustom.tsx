/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';

import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorCustom = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://lookgoodlive.com/wp-content/uploads/2021/03/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuButton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="navigate-circle-outline" size={20} color="black" />
          <Text style={styles.menuText}> Stack Navigator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.menuButton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="ios-cog-outline" size={20} color="black" />
          <Text style={styles.menuText}> Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
