import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default class GridItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const backgroundColor = this.props.active ? this.props.backgroundColor : '#DCDCDC'
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.num)}
      >
        <View
          style={[
            {
              width: this.props.edge,
              height: this.props.edge,
              backgroundColor: backgroundColor,
            },
            styles.squre
          ]}
        >
          <Text>{this.props.num === void 0 ? '' : this.props.num}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  squre: {
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
