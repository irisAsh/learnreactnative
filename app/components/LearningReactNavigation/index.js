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
import DrawerScreen from './components/DrawerScreen'
import TabScreen from './components/TabScreen'

const ScreenRoutes = {
  NavigationProp: {
    title: 'Navigation Prop を学ぶ',
    description: '遷移先画面で利用できる Navigation Prop を学びます。',
    screen: NavigationProp,
  },
  DrawerScreen: {
    title: 'DrawerNavigator を学ぶ',
    description: '画面横から現れるメニューによる画面遷移を学びます。',
    screen: DrawerScreen,
  },
  TabScreen: {
    title: 'TabNavigator を学ぶ',
    description: '画面下に表示されるタブメニューによる画面遷移を学びます。',
    screen: TabScreen,
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
    LearningReactNavigation: {
      screen: LearningReactNavigation,
    },
    ...ScreenRoutes,
  },
  {
    initialRouteName: 'LearningReactNavigation',
    headerMode: 'none',
  }
)

export default LearningReactNavigationStack
