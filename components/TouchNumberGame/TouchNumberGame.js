import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import NumberGrid from './NumberGrid'
import LevelScene from './LevelScene'

export default class TouchNumberGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 0,
    }
  }

  _changeLevel(level) {
    console.log("&&&&&&&&&&&")
    this.setState({
      level: level,
    })
  }

  selectLevel(level) {
  }

  render() {
    const level = this.state.level
    console.log('At top, level : ' + level)
    return (
      <View style={styles.container}>
        <NumberGrid
          level={level}
        />
        <LevelScene
          onPress={this._changeLevel.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
  },
})
