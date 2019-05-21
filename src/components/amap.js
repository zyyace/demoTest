import React from 'react'
import { View, NativeModules, requireNativeComponent } from 'react-native'
import PropTypes from 'prop-types'

const { RNTAMapManager } = NativeModules

const propTypes = {
  onMarkerClick: PropTypes.func,
}

const defaultProps = {
  onMarkerClick: () => {},
}

class AMap extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isInitialized: false,
    }
  }

  componentDidMount () {
  }

  render () {
    const { isInitialized } = this.state

    const onViewLayout = (e) => {
      if (e.nativeEvent.layout.height === 0) {
        return
      }

      this.setState({ isInitialized: true })
    }

    if (isInitialized) {
      return (
        <RNTAMap
          {...this.props}
        />
      )
    }

    return (
      <View style={{ flex: 1 }} onLayout={onViewLayout} />
    )
  }
}

// methods
// AMap.setCoordinate = (lat, lon, name, address) => RNTAMapManager.setCoordinate(lat, lon,
//   name, address)
// AMap.location = () => RNTAMapManager.location()
// AMap.setMarkerData = jsonArr => RNTAMapManager.setMarkerData(jsonArr)
// AMap.clearMapData = () => RNTAMapManager.clearMapData()
// AMap.resetMyLocationView = () => RNTAMapManager.resetMyLocationView()
// AMap.changeCityMoveCamera = jsonArr => RNTAMapManager.changeCityMoveCamera(jsonArr)
// AMap.naviAction = () => RNTAMapManager.naviAction()
// AMap.setShopDetailNavigationType = id => RNTAMapManager.setShopDetailNavigationType(id)
// AMap.setNearbyNavigationType = id => RNTAMapManager.setNearbyNavigationType(id)

AMap.propTypes = propTypes
AMap.defaultProps = defaultProps

const RNTAMap = requireNativeComponent('RNTAMap', AMap)

export default AMap
