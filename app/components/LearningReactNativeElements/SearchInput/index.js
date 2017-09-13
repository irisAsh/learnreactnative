import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
} from 'react-native'

import styles from './styles'

export default class LearningReactNativeElements extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      focus: false,
    }
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          onBlur={() => this._onBlur()}
          onFocus={() => this._onFocus()}
          onChange={(event) => this._onChange(event)}
          onSubmitEditing={() => this._onSubmitEditing()}
          placeholder={'設定'}
          returnKeyType='done'
          style={[styles.input, this.state.focus ? styles.inputOnFocus : {}]}
        />
      </View>
    )
  }

  _onBlur = () => {
    this.setState({
      focus: false,
    })
  }

  _onFocus = () => {
    this.setState({
      focus: true,
    })
  }

  _onChange = (event) => {
    this.setState({
      inputText: event.nativeEvent.text,
      focus: true,
    })
  }

  _onSubmitEditing = () => {
    console.log(this.state.inputText)
  }
}
