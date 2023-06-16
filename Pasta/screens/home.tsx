import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import C from './screens/comprovantes';

export default function telaA({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Você está na tela A</Text>
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
  text:{
    fontWeight:'bold',
    color:'#004987'
  }
});