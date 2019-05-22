import React from 'react'
import {
  View, Text, UIManager, findNodeHandle,
} from 'react-native'

import ViewTest from './viewTest'

class MyViewTest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  changeNativeButtonText () {
    UIManager.dispatchViewManagerCommand(
      // 如果native组件在js中不是以单一的模块存在，对应的findNodeHandle(this)也要做相应的变化
      findNodeHandle(this.ViewTest), // 找到与NativeUI组件对应的JS组件实例
      UIManager.TestView.Commands.changeText,
      [], // 参数
    )
  }

  render () {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text>ace</Text>
        <ViewTest ref={(c) => { this.ViewTest = c }} style={{ width: 100, height: 100 }} onNativeShowMessToJs={() => { alert('button clicked in native') }} />
        <Text onPress={() => { this.changeNativeButtonText() }}>JsChangeNativeText</Text>
      </View>
    )
  }
}

export default MyViewTest