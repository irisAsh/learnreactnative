import React from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import styles from './styles'
import Header from './components/Header'
import NavigationProp from './components/NavigationProp'

const ScreenRoutes = {
  NavigationProp: {
    title: 'Navigation Prop を学ぶ',
    description: '遷移先画面で利用できる Navigation Prop を学びます。',
    screen: NavigationProp,
  },
}

const LearningReactNavigation = ({ navigation }) => (
  <ScrollView>
    <Header navigation={navigation} />
    {Object.keys(ScreenRoutes).map(routeName => {
      const route = ScreenRoutes[routeName]
      return (
        <TouchableOpacity
          key={routeName}
          onPress={() => navigation.navigate(routeName)}
        >
          <View style={styles.listContainer}>
            <Text style={styles.title}>{route.title}</Text>
            <Text style={styles.description}>{route.description}</Text>
          </View>
        </TouchableOpacity>
      )
    })}
  </ScrollView>
)

const LearningReactNavigationStack = StackNavigator(
  {
    ...ScreenRoutes,
    LearningReactNavigation: {
      screen: LearningReactNavigation,
    },
  },
  {
    initialRouteName: 'LearningReactNavigation',
    headerMode: 'none',
  }
)

export default LearningReactNavigationStack
