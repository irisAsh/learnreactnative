import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import LevelButton from './LevelButton'

export default class LevelScene extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const levelColors = ['#FFC0CB', '#FF69B4', '#FF6347', '#DC143C']
    const buttons = Array.from(new Array(4)).map((e, i) => {
      let buttonName = 'Level: ' + (i+1)
      return (
        <LevelButton
          key={buttonName}
          buttonName={buttonName}
          buttonColor={levelColors[i]}
          level={i}
          onPress={this._changeLevel.bind(this)}
        />
      )
    })
    return (
      <View style={styles.buttonsContainer}>
        {buttons}
      </View>
    )
  }

  _changeLevel(level) {
    this.props.onPress(level)
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    //flex: 1,
    flexDirection: 'row',
  },
})
