import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { metrics } from '../../theme/metrics';
import { colors } from '../../theme/colors';
import Text from '../text/Text';

export default function Button({ title, onPress, customStyles }) {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      <Text customStyles={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: metrics.spacing.s,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: colors.black,
    borderRadius: 20,
    // alignSelf: 'flex-end',
  },
  btnText: {
    fontFamily: 'heading',
    padding: metrics.spacing.xs,
    color: colors.white,
  },
});
