import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation<any>();
  return (
    <View style={styles.globalMargin}>
      <Text>Page2Screen</Text>

      <Button
        title="Go to Page 3"
        onPress={() => navigator.navigate('Page3Screen')}
      />
    </View>
  );
};
