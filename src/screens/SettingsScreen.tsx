import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles, colors} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);
  const {favoriteIcon} = authState;
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {favoriteIcon && (
        <Icon name={favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};
