import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShareUtils from '../utils/ShareUtil'

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
        <Text
          onPress={() => {
            ShareUtile.auth(0,(code,result,message) =>{
              this.setState({result:message});
              if (code == 0){
                  this.setState({result:result.uid});
              }
          });
          }}
        >分享</Text>
      </View>
    );
  }
}
