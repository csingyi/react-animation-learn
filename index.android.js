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
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }
  
 
  render() {

   const marginLeft = this.animatedValue.interpolate({
     inputRange: [0, 1],
     outputRange: [0, 300]
   }) 

   const opacity = this.animatedValue.interpolate({
     inputRange: [0, 0.5, 1],
     outputRange: [0, 1, 0]
   })

   const movingMargin = this.animatedValue.interpolate({
     inputRange: [0, 0.5, 1],
     outputRange: [0, 300, 0]
   })

   const textSize = this.animatedValue.interpolate({
     inputRange: [0, 0.5, 1],
     outputRange: [18, 32, 18]
   })

   const rotateX = this.animatedValue.interpolate({
     inputRange: [0, 0.5, 1],
     outputRange: ['0deg', '180deg', '0deg']
   })
    return (
      <View style={styles.container}>
        <Animated.View
           style={{
             marginLeft,
             height: 30,
             width: 40,
             backgroundColor: 'red'
           }}
           />

                <Animated.View
           style={{
             opacity,
             marginTop:10,
             height: 30,
             width: 40,
             backgroundColor: 'blue'
           }}
           />

                <Animated.View
           style={{
             marginLeft: movingMargin,
             marginTop: 10,
             height: 30,
             width: 40,
             backgroundColor: 'orange'
           }}
           />

                <Animated.Text
           style={{
             marginTop: 10,
             fontSize: textSize,
             height: 30,
             width: 40,
             backgroundColor: 'green'
           }}
           />

                <Animated.View
           style={{
             transform:[{rotateX}],
             marginLeft,
             marginTop: 50,
             height: 40,
             width: 80,
             backgroundColor: 'black'
           }}
           >
          <Text style={{color: 'white'}}>Hello , i am jack</Text>
           </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150
  }
});

AppRegistry.registerComponent('animations', () => animations);
