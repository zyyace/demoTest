import { StackNavigator } from 'react-navigation'

import Index from '../index'
import ViewTest from '../views/viewTest/myViewTest'
import MapTest from '../views/map/mapView'

const ModalStack = StackNavigator(
  {
    Index: { screen: Index },
    MapTest: { screen: MapTest },
    ViewTest: { screen: ViewTest },
  },
  {
    navigationOptions: {
      headerBackTitle: '首页',
      headerTintColor: '#000000',
      header: null,
      showIcon: true,
      swipeEnabled: true,
      animationEnabled: true,
    },
    mode: 'card',
  },
)

export default ModalStack
