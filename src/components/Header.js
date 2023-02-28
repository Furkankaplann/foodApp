import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export default function Header({type, title, onPress}) {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20}}>
        <Icon
          type="meterial-community"
          name={type}
          color={colors.heaherText}
          size={28}
          onPress={onPress}
          
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },

  headerText: {
    color: colors.heaherText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
