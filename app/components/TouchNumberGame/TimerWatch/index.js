import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

const MAX_TIME = 3599999

export default class TimerWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      running: false,
      startTime: null,
      progressTime: 0,
      interval: null,
    }
  }

  componentWillUnmount() {
    this.stop()
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.start()}
      >
      <View style={styles.container}>
        <Text style={styles.watch}>
          {this.formatTime(this.state.progressTime)}
        </Text>
      </View>
      </TouchableOpacity>
    )
  }

  start = () => {
    this.setState({
      running: true,
      startTime: new Date(),
      progressTime: 0,
    })

    this.interval = setInterval(() => {
      if (this.state.progressTime >= MAX_TIME) {
        this.stop()
        this.setState({
          progressTime: MAX_TIME,
        })
        return
      }
      this.setState({
        running: true,
        progressTime: new Date() - this.state.startTime,
      })
    }, 50);
  }

  stop = () => {
    clearInterval(this.interval)
  }

  formatTime = (time) => {
    let m = Math.floor(time / 60000)
    let s = Math.floor((time % 60000) / 1000)
    let ms = time % 60000 % 1000
    m = ('00' + m).slice(-2)
    s = ('00' + s).slice(-2)
    ms = ('000' + ms).slice(-3)
    return `${m}:${s}:${ms}`
  }
}
