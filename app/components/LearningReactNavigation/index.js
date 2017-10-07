import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'
import { StackNavigator } from 'react-navigation'

const LearningReactNavigation = ({ navigation }) => (
  <View>
    <Text>Learing React Navigation</Text>
    <Button
      onPress={() => navigation.goBack(null)}
      title='BACK'
    />
  </View>
)

const LearningReactNavigationStack = StackNavigator({
  LearningReactNavigation: {
    screen: LearningReactNavigation,
    navigationOptions: {
      title: 'Main Screen',
    },
  },
})

export default LearningReactNavigationStack
