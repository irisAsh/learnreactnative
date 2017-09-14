import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import SearchInput from './SearchInput'
import MenuList from './MenuList'

export default class LearningReactNativeElements extends Component {
  render() {
    return (
      <View>
        <SearchInput />
        <MenuList {...this.props} />
      </View>
    )
  }
}
