// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
import React from 'react'
import {
  View,
  NativeModules,
  NativeEventEmitter,
  DeviceEventEmitter,
  Text,
} from 'react-native'
import { Provider } from 'react-redux'
import Toast from 'react-native-easy-toast'

import configureStore from './src/store'
import StartNavigator from './src/router'


const store = configureStore()

// YellowBox
console.disableYellowBox = true

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StartNavigator />
        </View>
      </Provider>
    )
  }
}
