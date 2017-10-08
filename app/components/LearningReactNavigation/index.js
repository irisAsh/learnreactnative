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
  </View>
)

const LearningReactNavigationStack = StackNavigator({
  LearningReactNavigation: {
    screen: LearningReactNavigation,
    navigationOptions: props => {
      return {
        title: 'Learing React Navigation',
        headerLeft: (
          <Button
            onPress={() => props.navigation.goBack(null)}
            title='Back'
          />
        ),
      }
    },
  },
})

export default LearningReactNavigationStack
