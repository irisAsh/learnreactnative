import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import PrototypeScreen from '../PrototypeScreen'

const NavigationProp = ({ navigation }) => (
  <View>
    <View>
      <Button
        title='Red Button'
        onPress={() => navigation.navigate('RedScreen', { buttonName: 'Red Button' })}
      />
    </View>
  </View>
)

NavigationProp.navigationOptions = props => {
  console.log(props)
  return {
    title: 'Navigation Prop',
    headerStyle: {
      backgroundColor: '#FF4986',
    },
    headerLeft: (
      <Button
        title='Back'
        onPress={() => props.navigation.goBack(null)}
      />
    )
  }
}

const RedScreen = ({ navigation }) => (
  <PrototypeScreen
    navigation={navigation}
  />
)

const NavigationPropStack = StackNavigator({
  NavigationProp: {
    screen: NavigationProp,
  },
  RedScreen: {
    screen: RedScreen,
  },
})

export default NavigationPropStack
