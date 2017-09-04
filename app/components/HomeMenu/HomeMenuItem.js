import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

export default class HomeMenuItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this._onPress()}
        >
          <Text>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onPress = () => {
    this.props.onPressItem(this.props.id)
  }
}
