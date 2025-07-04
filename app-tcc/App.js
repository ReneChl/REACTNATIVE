import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.TextContent}>APLICATIVO PARA O MEU TCC</Text>
      <StatusBar style="auto" />

    <View style={styles.viewContent}>
        <Text style={styles.texContent}>TEXTO PARA EXEMPLO DA SEGUNDA VIEW</Text>
        <Text style={styles.texContent}>pARÁGRAFO TESTE OARA QUE EU TENHA UM TEXTO AQUI</Text>

        <Image source={{ uri: 'https://img.freepik.com/fotos-premium/estrela-dourada-isolada-em-fundo-branco-isto-tem-caminho-de-corte_34155-5243.jpg?semt=ais_items_boosted&w=740'}}>
            
        </Image>

        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button')}/>
    </View>


  </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextComponent: {
    fontSize: 40,
    color: 'white',
    margin: 10,
  },

  image: {
    width: 120,
    height: 120,
  },

  ViewContent:{
    padding:20,
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',

  }
});

// View = mesmo que div


