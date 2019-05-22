import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules } from 'react-native';

import PropTypes from 'prop-types'

const { ImagePickerModule } = NativeModules

const propTypes = {
  navigation: PropTypes.object,
}
const defaultProps = {
  navigation: {},
}

export default class Index extends Component {

  async openImagePicker () {
    try {
      var { reason, other } = await ImagePickerModule.pickImage();
      console.log('reason:' + reason + 'other:' + other);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>page test 3</Text>
        <Text onPress={() => { navigation.navigate('MapTest') }}>跳转到地图</Text>
        <Text onPress={() => { navigation.navigate('ViewTest') }}>ViewTest</Text>
        {/* <Text onPress={() => { this.openImagePicker()}}>图片选择</Text>
        <Text onPress={() => { navigation.navigate('TimeLineTest')}}>时间轴</Text> */}
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

Index.propTypes = propTypes
Index.defaultProps = defaultProps