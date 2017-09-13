import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeMenu from '../components/HomeMenu/HomeMenu'
import AnimatedSample from '../components/AnimatedSample'
import FlickGame from '../components/FlickGame/FlickGame'
import LearningReactNativeElements from '../components/LearningReactNativeElements'
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
  FlickGame: {
    screen: FlickGame,
    navigationOptions: {
      title: 'FlickGame',
    }
  },
  LearningReactNativeElements: {
    screen: LearningReactNativeElements,
    navigationOptions: {
      title: '設定',
    }
  },
  TouchNumberGame: {
    screen: TouchNumberGame,
    navigationOptions: {
      title: 'TouchNumberGame',
    }
  }
})