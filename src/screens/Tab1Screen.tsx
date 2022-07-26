import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <TouchableIcon name="airplane-outline" />
        <TouchableIcon name="basket-outline" />
        <TouchableIcon name="body" />
        <TouchableIcon name="cloud-download-outline" />
        <TouchableIcon name="code-slash" />
        <TouchableIcon name="copy-outline" />
        <TouchableIcon name="download-outline" />
      </Text>
    </View>
  );
};
