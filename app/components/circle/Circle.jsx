import { View, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../theme/colors';

export default function Circle() {
  return <View style={styles.circle}></View>;
}

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    left: 140,
    height: 30,
    width: 30,
    borderRadius: 60,
    borderColor: colors.lightCream,
    borderWidth: 3,
    top: 25,
    zIndex: 1,
  },
});
