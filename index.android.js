/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native';

export default class animations extends Component {
  constructor () {
    super()
    this.springValue = new Animated.Value(0.3)
  }

 
 spring () {
   this.springValue.setValue(0.3)
   Animated.spring(
     this.springValue,
     {
       toValue: 1,
       friction: 1
     }
   ).start()
 }
  
 
  render() {

   
    return (
      <View style={styles.container}>
        <Text
          style={{marginBottom: 100}}
          onPress = {this.spring.bind(this)}>石原里美</Text>
          <Animated.Image
          style={{width:227, height:200, transform:[{scale:this.springValue}]}}
          source={{uri:'http://i1.wp.com/rastaneko-blog.com/wp-content/uploads/2016/04/df8163826e20c566f77728ee981d14f5.jpg'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    justifyContent:'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('animations', () => animations);
