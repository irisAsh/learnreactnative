import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import Header from './components/Header'
import BookList from './components/BookList'

export default class LearningRealm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastDate: new Date(),
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header {...this.props}
          navigateParams={{refresh: this.updateDate}}
        />
        <BookList />
      </View>
    )
  }

  updateDate = () => {
    this.setState({
      lastDate: new Date(),
    })
  }
}
