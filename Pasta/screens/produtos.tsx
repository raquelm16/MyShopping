import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function produtos({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>Lista de compras</Text>

      <input style={styles.input} placeholder='Nome do produto'/>
      <input style={styles.qnt} placeholder='0'/>
      <button style={styles.ad}>
      <img src={'../img/ad.png'}></img>
      </button>        
      

    <View style={styles.caixa}>
        <View style={styles.coluna1}>
      <Text style={styles.textLabel}>Café</Text>
      <Text style={styles.qtLabel}>Quantidade: 3</Text>
      </View>
      <View style={styles.coluna2}>
      <button style={styles.repeat}>repetir</button>
      <button style={styles.excluir}>excluir</button>
      </View>
      </View>

      <View style={styles.caixa}>
        <View style={styles.coluna1}>
      <Text style={styles.textLabel}>Pacote de Arroz</Text>
      <Text style={styles.qtLabel}>Quantidade: 2</Text>
      </View>
      <View style={styles.coluna2}>
      <button style={styles.feito}>feito</button>
      <button style={styles.excluir}>excluir</button>
      </View>
   </View>

      <View style={styles.caixa}>
        <View style={styles.coluna1}>
      <Text style={styles.textLabel}>Suco de Laranja</Text>
      <Text style={styles.qtLabel}>Quantidade: 1</Text>
      </View>
      <View style={styles.coluna2}>
      <button style={styles.feito}>feito</button>
      <button style={styles.excluir}>excluir</button>
   </View>
   </View>





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
  header:{
    flex:1,
    backgroundColor:'#8284e3',
    color:'#fff',
    fontSize:28,
    fontWeight:'500',
    width:'100%',
    textAlign:'center',
    marginBottom:'95%',
    paddingTop:'6%'
},
input:{
    backgroundColor:'#f2f2f2',
    borderWidth:0,
    padding:21,
    fontSize:14,
    paddingLeft:'2.5%',
    borderRadius:3
},
qnt:{
    backgroundColor:'#f2f2f2',
    borderWidth:0,
    fontSize:15,
    padding:21,
    width:20,
    marginTop:20,
    borderRadius:3,
    textAlign:'center'
},
ad:{
    borderWidth:0,
    padding:21,
    width:20,
    borderRadius:3,
    backgroundColor:'#34b474'
},
caixa:{
    backgroundColor:'#f2f2f2',
    padding:17,
    flexDirection:'row',
    borderRadius:3,
    width:'90%',
    margin:6
},
coluna1:{
    flexDirection:'column'
},
coluna2:{
    flexDirection:'column',
    justifyContent:'flex-end',
    marginLeft:'40%'
},
textLabel:{
    fontSize:17,
    fontWeight:'bold',
    width:200
},
qtLabel:{
    color:'#b8b8b8'
},
repeat:{
    borderWidth:0,
    borderRadius:3,
    backgroundColor:'#34b474',
    padding:10,
},
excluir:{
    borderWidth:0,
    borderRadius:3,
    backgroundColor:'#dc0a1a',
    padding:10,
},
feito:{
    borderWidth:0,
    borderRadius:3,
    backgroundColor:'#34b474',
    padding:10,
}
});