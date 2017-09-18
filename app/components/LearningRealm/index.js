import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import Header from './components/Header'
import BookList from './components/BookList'

export default class LearningRealm extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header {...this.props} />
        <BookList />
      </View>
    )
  }
}
