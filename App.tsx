import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewsScreen from './src/screens/NewsScreen';
import NewsCard from './src/components/NewsCard';


export default function App() {
  return (
    <View style={styles.container}>
      <NewsScreen />
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
