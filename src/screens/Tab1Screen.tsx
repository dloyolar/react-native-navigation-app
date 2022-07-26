import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="basket-outline" size={80} color={colors.primary} />
        <Icon name="body" size={80} color={colors.primary} />
        <Icon name="cloud-download-outline" size={80} color={colors.primary} />
        <Icon name="code-slash" size={80} color={colors.primary} />
        <Icon name="copy-outline" size={80} color={colors.primary} />
        <Icon name="download-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};
