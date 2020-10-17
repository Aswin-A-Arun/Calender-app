import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {View,
  TouchableOpacity,
  Text,
  TextInput,} from 'react-native';
import { Avatar } from "react-native-elements";
import { Button } from 'react-native-elements';
import {StyleSheet} from 'react-native-elements';

import db from '../Config';
import firebase from 'firebase';


export default class LoginScreen extends Component{

  render(){
    return(
      <View>
      
<Avatar
 size="small"
  rounded
  title="MT"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>

<Input
  placeholder='INPUT WITH ICON'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/>
<Input
  placeholder='INPUT WITH CUSTOM ICON'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>
 <Input
   placeholder="Comment"
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   style={{backgroundColor:"blue" }}
   onChangeText={value => this.setState({ comment: value })}
  />

<Input placeholder="Password" secureTextEntry={true} />


</View>
);
}
}

const styles = StyleSheet.create({
  flex:1,
  fontSize: 20,
  justifyContent:'center',
  alignItems:'center'
  
});
 


