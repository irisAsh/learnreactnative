import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
} from 'react-native'
import { Button } from 'react-native-elements'

import TextBox from '../TextBox'
import SelectBox from '../SelectBox'
import { GENRE_LIST } from '../../config/configs'
import styles from './styles'

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookName: '',
      author: '',
      genre: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextBox
          label='書籍名'
          onChangeText={this.setBookName}
        />
        <TextBox
          label='著者名'
          onChangeText={this.setAuthor}
        />
        <SelectBox
          label='ジャンル'
          items={GENRE_LIST}
          selectedValue={this.state.genre}
          onValueChange={value => this.setGenre(value)}
        />
        <Button
          icon={{ name: 'book', type: 'font-awesome' }}
          title='REGISTER'
          buttonStyle={styles.registerButtonStyle}
        />
      </View>
    )
  }

  setBookName = (bookName) => {
    this.setState({ bookName })
  }
  setAuthor = (author) => {
    this.setState({ author })
  }

  setGenre = (genre) => {
    this.setState({ genre })
  }
}
