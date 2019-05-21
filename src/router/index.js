import { StackNavigator } from 'react-navigation'

import Index from '../index'
import MapTest from '../views/map/index'

const ModalStack = StackNavigator(
  {
    Index: { screen: Index },
    MapTest: { screen: MapTest },
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
