import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimeLine from '../components/time-line'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class TimeLineTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TimeLine
          data={[
            {time: '9:31', title: '重庆', description: '重庆出发'},
            {time: '11:31', title: '成都', description: '成都出发'},
            {time: '15:31', title: '上海', description: '上海出发'},
            {time: '23:31', title: '北京', description: '北京出发'}
          ]}
        />
      </View>
    );
  }
}
