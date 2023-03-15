import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Colors } from '../../theme/colors';

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
