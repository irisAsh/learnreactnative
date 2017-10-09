import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import styles from './styles'
import PropTestScreen from '../PropTestScreen'

const NavigationProp = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button
        title='Red Button'
        color='white'
        onPress={() => navigation.navigate('RedScreen', {
          screenText: 'Red Button が押されました',
          screenColor: '#FF4949',
          changeFlag: false,
        })}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        title='Blue Button'
        color='white'
        onPress={() => navigation.navigate('BlueScreen', {
          screenText: 'Blue Button が押されました',
          screenColor: '#2172FF',
          changeFlag: false,
        })}
      />
    </View>
  </View>
)

NavigationProp.navigationOptions = props => {
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
  <PropTestScreen
    navigation={navigation}
  />
)

const BlueScreen = ({ navigation }) => (
  <PropTestScreen
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
  BlueScreen: {
    screen: BlueScreen,
  },
})

export default NavigationPropStack
