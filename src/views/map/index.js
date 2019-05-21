import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>map</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  map: {
    flex: 1,
    width: '100%',
  },
});