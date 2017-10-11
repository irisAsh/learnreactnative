import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles'

const TabProto = ({ navigation, screenText, screenColor }) => (
  <View style={[
    styles.container,
    {backgroundColor: screenColor}
  ]}>
    <Text>{screenText}</Text>
    <TouchableOpacity
      onPress={() => navigation.goBack(null)}
    >
      <Text style={styles.back}>Back</Text>
    </TouchableOpacity>
  </View>
)

const TabMain = ({ navigation }) => (
  <TabProto
    navigation={navigation}
    screenText='Main Screen'
    screenColor='#FF9823'
  />
)

TabMain.navigationOptions = {
  tabBarLabel: 'Main',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={ focused ? 'ios-radio-button-on' : 'ios-radio-button-off-outline' }
      size={20}
      style={{ color: tintColor }}
    />
  )
}

const TabRed = ({ navigation }) => (
  <TabProto
    navigation={navigation}
    screenText='Red Screen'
    screenColor='#FF4949'
  />
)

TabRed.navigationOptions = {
  tabBarLabel: 'Red',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={ focused ? 'ios-heart' : 'ios-heart-outline' }
      size={20}
      style={{ color: tintColor }}
    />
  )
}

const TabBlue = ({ navigation }) => (
  <TabProto
    navigation={navigation}
    screenText='Blue Screen'
    screenColor='#2172FF'
  />
)

TabBlue.navigationOptions = {
  tabBarLabel: 'Blue',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={ focused ? 'ios-globe' : 'ios-globe-outline' }
      size={20}
      style={{ color: tintColor }}
    />
  )
}

const TabScreen = TabNavigator(
  {
    TabMain: {
      screen: TabMain,
    },
    TabRed: {
      screen: TabRed,
    },
    TabBlue: {
      screen: TabBlue,
    },
  },
  {
    initialRouteName: 'TabMain',
    tabBarOptions: {
      activeTintColor: '#FF1414',
    },
  }
)

export default TabScreen
