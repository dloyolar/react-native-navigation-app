import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigatior/StackNavigator';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  const params = route.params;
  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  useEffect(() => {
    changeUsername(params.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
