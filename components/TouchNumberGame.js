import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import NumberGrid from './NumberGrid'
import LevelScene from './LevelScene'

export default class TouchNumberGame extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NumberGrid />
        <LevelScene />
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
