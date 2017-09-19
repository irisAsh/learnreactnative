import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
} from 'react-native'

import TextBox from '../TextBox'

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookName: '',
      author: '',
    }
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <TextBox
          label='書籍名'
          onChangeText={this.setBookName}
        />
        <TextBox
          label='著者名'
          onChangeText={this.setAuthor}
        />
      </View>
    )
  }

  setBookName = (bookName) => {
    this.setState({ bookName })
  }

  setAuthor = (author) => {
    this.setState({ author})
  }
}
