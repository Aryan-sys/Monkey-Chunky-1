import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      word: '',
      text: ''
   }
  }
  render() {
    return (
      <SafeAreaProvider>
      <View>
        <Header backgroundColor = 'red' centerComponent= {{ text: "Monkey Chunky", style : {fontSize : 30, fontStyle: 'bold', fontFamily: 'Ariel' } }} />
          <TextInput style={{ borderWidth: 2, borderRadius: 10, marginTop: 20, width: '60%', height: 60, alignSelf: 'center' }}
            onChangeText={(text) => { this.setState({word : text})} }/>
          <TouchableOpacity  onPress = {()=>this.setState({text : this.state.word})}
            style={{ alignSelf: 'center', borderWidth: 2, borderRadius: 100, backgroundColor: 'green', width: 200, height: 200, alignItems: 'center', justifyContent: 'center' }}>
          
            <Text style={{ fontSize: 100 }}>Go</Text>
          </TouchableOpacity>
          <Text>{this.state.text}</Text>
        </View >
      </SafeAreaProvider>
    );
  }
}
