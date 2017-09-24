import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TextInput,
  View,
} from 'react-native'

import styles from './styles'

export default class TextBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Text style={[styles.labelText, this.props.labelStyle]}>
          {this.props.label}
        </Text>
        <TextInput
          onChangeText={(text) => this._onChangeText(text)}
          returnKeyType='done'
          style={[styles.inputContainer, this.props.inputStyle]}
          value={this.props.text}
        />
      </View>
    )
  }

  _onChangeText = (text) => {
    this.props.onChangeText(text)
  }
}

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
  containerStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  labelStyle: PropTypes.any,
  onChangeText: PropTypes.func,
}
