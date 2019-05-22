import React, {Component} from 'react'
import { requireNativeComponent } from "react-native"

/**
 * Composes `View`.
 *
 * - src: string
 * - borderRadius: number
 * - resizeMode: 'cover' | 'contain' | 'stretch'
 */
var TestView = requireNativeComponent("RNTAMap")

class MyCustomView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TestView/>
  }
}

export default MyCustomView