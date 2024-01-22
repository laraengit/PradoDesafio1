/* import { StatusBar } from 'expo-status-bar'; */
import { StyleSheet, Text, View } from 'react-native';

const  App = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Hola, Coder! Esta es mi primera entrega. </Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FBC8F',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
    color: 'white',

  },
});
