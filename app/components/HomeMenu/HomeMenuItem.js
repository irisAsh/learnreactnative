import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
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
      <TouchableOpacity
        onPress={() => this._onPress()}
      >
        <View style={styles.menuItemContainer}>
          <Image
            style={styles.imgBox}
            source={this.props.imageName}
          />
          <Text>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  _onPress = () => {
    this.props.onPressItem(this.props.id)
  }
}

const styles = StyleSheet.create({
  imgBox: {
    width: 80,
    height: 80,
  },
  menuItemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
})
