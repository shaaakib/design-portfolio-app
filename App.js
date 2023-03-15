import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import DesignPortfolio from './app/screens/DesignPortfolio';
import { colors } from './app/theme/colors';
import {
  PlusJakartaSans_700Bold,
  PlusJakartaSans_500Medium,
} from '@expo-google-fonts/plus-jakarta-sans';
import { useFonts } from '@expo-google-fonts/plus-jakarta-sans/useFonts';

export default function App() {
  const [fontsLoaded] = useFonts({
    heading: PlusJakartaSans_700Bold,
    body: PlusJakartaSans_500Medium,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <DesignPortfolio />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightCream,
  },
});
