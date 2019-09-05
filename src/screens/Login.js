import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button ,TouchableOpacity,AsyncStorage } from 'react-native';
import firebase from '../component/configFirebase';

export default class Login extends Component {
  state = { email:'', password:'', errorMessage: null }
 handleLogin = async() => {
  await AsyncStorage.setItem('userToken', 'abc');
   firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .then(() => this.props.navigation.navigate('App'))
     .catch(error => this.setState({ errorMessage: error.message }))
 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#e93766', fontSize: 40}}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <Button title='Login' color='#e93766' onPress={this.handleLogin} />
        <View>

        <Text> Don't have an account? </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
        <Text  style={{color:'#e93766'}}>Sign Up</Text>  
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textInput: {
        height: 40,
        fontSize:20,
        width: '90%',
        borderColor: '#9b9b9b',
        borderBottomWidth: 1,
        marginTop: 8,
        marginVertical: 15
      }
  })
