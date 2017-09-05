import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeMenu from '../components/HomeMenu/HomeMenu'
import AnimatedSample from '../components/AnimatedSample'
import TouchNumberGame from '../components/TouchNumberGame/TouchNumberGame'

export const HomeStack = StackNavigator({
  HomeMenu: {
    screen: HomeMenu,
    navigationOptions: {
      title: 'HomeMenu',
    }
  },
  AnimatedSample: {
    screen: AnimatedSample,
    navigationOptions: {
      title: 'AnimatedSample',
    }
  },
  TouchNumberGame: {
    screen: TouchNumberGame,
    navigationOptions: {
      title: 'TouchNumberGame',
    }
  }
})
