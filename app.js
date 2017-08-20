import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import AnimatedSample from './components/AnimatedSample'
import TouchNumberGame from './components/TouchNumberGame'

export default class App extends Component {
  render() {
    return (
      <TouchNumberGame />
    )
  }
}
