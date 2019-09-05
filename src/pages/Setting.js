import React ,{Component} from  'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity} from 'react-native';
import firebase from '../component/configFirebase'

 
  

      
  export default class WelcomeScreen extends Component {
      render(){
          return(
            <View style={styles.container}>
                <Text>

                  ARE YOU GOING TO LOGGED OUT??

		            </Text>
                <TouchableOpacity onPress={this.logout}>
                  <Text>
                    LOGGED OUT
                  </Text>
                </TouchableOpacity>
            </View>
          )
      }
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigator.navigate('Logout');
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})