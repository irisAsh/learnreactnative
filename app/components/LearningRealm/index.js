import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import Header from './components/Header'

export default class LearningRealm extends Component {
  render() {
    return (
      <View>
        <Header {...this.props} />
        <Text>LearningRealm</Text>
      </View>
    )
  }
}
