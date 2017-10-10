import React from 'react'
import {
  Button,
  ScrollView,
  View,
} from 'react-native'
import { DrawerItems, DrawerNavigator } from 'react-navigation'

import styles from './styles'

const DrawerProto = ({ navigation, backgroundColor }) => (
  <View style={[
    styles.container,
    {backgroundColor: backgroundColor}
  ]}>
    <Button
      title='メニューを開く'
      onPress={() => navigation.navigate('DrawerOpen')}
    />
    <Button
      title='戻る'
      onPress={() => navigation.goBack(null)}
    />
  </View>
)

const DrawerMain = ({ navigation }) => (
  <DrawerProto
    navigation={navigation}
    backgroundColor='#DDFFFE'
  />
)

DrawerMain.navigationOptions = {
  drawerLabel: 'Main Screen',
}

const DrawerRed = ({ navigation }) => (
  <DrawerProto
    navigation={navigation}
    backgroundColor='#FF5185'
  />
)

DrawerRed.navigationOptions = {
  drawerLabel: 'Red Screen',
}

const DrawerScreen = DrawerNavigator(
  {
    DrawerMain: {
      screen: DrawerMain,
    },
    DrawerRed: {
      screen: DrawerRed,
    },
  },
  {
    initialRouteName: 'DrawerMain',
    drawerWidth: 300,
    drawerPosition: 'left',
    backBehavior: 'none',
    contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
    contentOptions: {
      activeTintColor: '#3DDEFF',
    },
  },
)

export default DrawerScreen
