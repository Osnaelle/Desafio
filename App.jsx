import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';



const mmToPixels = (mm, dpi) => (mm * dpi) / 25.4;


export default function App() {

  const dpi = 160;
  const sizeInMm = 15; // Tamanho desejado em milímetros
  const sizeInPixels = mmToPixels(sizeInMm, dpi);

  return (
    <View style={styles.container}>
         <View style={[styles.circle, { width: sizeInPixels, height: sizeInPixels, borderRadius: sizeInPixels / 2, }]}>
          
      </View>
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
  circle: {
   
    backgroundColor: 'purple',
  }
});
