import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  View,
} from 'react-native'

export default class LevelButton extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <View style={[{backgroundColor: this.props.buttonColor}, styles.buttonBox]}>
        <Button
          title={this.props.buttonName}
          color='#FFFFFF'
          onPress={() => this.props._onPress(this.props.level)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonBox: {
    flex: 1,
    flexWrap: 'nowrap',
    alignItems: 'center',
    margin: 5,
  },
})
