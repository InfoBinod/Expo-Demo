import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity  } from 'react-native'
import firebase from '../component/configFirebase';

const rootref = firebase.database().ref();
const userref = rootref.child('ExpoDemo');

export default class signUp extends Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
       
      userref.push({
        Name:this.state.name,
        Email:this.state.email,
        Phone_NO:this.state.Phone_no,  
    })
      this.props.navigation.navigate('Login')
      .catch(error => this.setState({ errorMessage: error.message }))
  }

render() {
    return (
      <View style={styles.container}>
      <Text style={{color:'#e93766', fontSize: 40}}>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          placeholder="Phone No"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(phone_no) => this.setState({ phone_no })}
          value={this.state.phone_no}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity onPress={this.handleSignUp} >
          <Text style={{color:"#e93766"}}>
            Sign Up
          </Text>
        </TouchableOpacity>
        {/* <Button title="Sign Up" color="#e93766" onPress ​={this.handleSignUp}/> */}
        <View>
        <Text> Already have an account? </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>       
         
        <Text  style={{color:'#e93766'}}> Login </Text>
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
