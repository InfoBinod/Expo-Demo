import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet, AsyncStorage} from 'react-native';
import firebase from '../component/configFirebase';

export default class Loading extends Component {

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       this.props.navigation.navigate(user ? 'Home' : 'SignUp')
//     })
// }

_bootstrapAsync = async () => {
  const userToken = await AsyncStorage.getItem('userToken');

  // This will switch to the App screen or Auth screen and this loading
  // screen will be unmounted and thrown away.
  this.props.navigation.navigate(userToken ? 'App' : 'Auth');
};

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#e93766', fontSize: 40}}>Loading</Text>
        <ActivityIndicator color='#e93766' size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});