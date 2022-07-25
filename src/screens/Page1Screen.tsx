/* eslint-disable react-native/no-inline-styles */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text>Navigate with arguments</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.btnBig, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {id: 1, name: 'Pedro'})
          }>
          <Text style={styles.btnBigText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btnBig, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {id: 2, name: 'Maria'})
          }>
          <Text style={styles.btnBigText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
