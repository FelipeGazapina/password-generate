import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/Home';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.base}>
      <HomeScreen />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1
  }
})