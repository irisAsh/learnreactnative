import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeMenu from '../components/HomeMenu/HomeMenu'
import AnimatedSample from '../components/AnimatedSample'
import TouchNumberGame from '../components/TouchNumberGame/TouchNumberGame'

export const HomeStack = StackNavigator({
  HomeMenu: {
    screen: HomeMenu,
  },
  AnimatedSample: {
    screen: AnimatedSample,
  },
  TouchNumberGame: {
    screen: TouchNumberGame,
  }
})
