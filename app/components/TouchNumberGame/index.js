import React, { Component } from 'react'
import {
  Dimensions,
  View,
} from 'react-native'

import NumberGrid from './NumberGrid'
import LevelScene from './LevelScene'
import TimerWatch from './TimerWatch'
import styles from './styles'

export default class TouchNumberGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 0,
    }
  }

  render() {
    let data = this.createData(this.state.level)
    const root = Math.ceil(Math.sqrt(data.length))
    data = data.concat(Array.from(new Array(root*root - data.length)).fill(void 0))
    const edge = Math.floor(Dimensions.get('window').width) / root - 5

    return (
      <View style={styles.container}>
        <NumberGrid
          ref='numGrid'
          gridData={data}
          edge={edge}
          start={this.timerStart}
          stop={this.timerStop}
        />
        <TimerWatch
          ref='timerWatch'
        />
        <LevelScene
          onPress={this._changeLevel.bind(this)}
        />
      </View>
    )
  }

  _changeLevel(level) {
    this.refs.timerWatch.stop()
    this.setState({
      level: level,
    })
    this.refs.numGrid.clear()
  }

  timerStart = () => {
    this.refs.timerWatch.start()
  }

  timerStop = () => {
    this.refs.timerWatch.stop()
  }

  createData(level) {
    let col = level + 3
    let data = Array.from(new Array(col * col)).map((e, i) => i+1)
    // Schwartzian transform
    data = data
            .map((e) => [e, Math.random()])
            .sort((a, b) => a[1] - b[1])
            .map((e) => e[0])
    return data
  }
}
