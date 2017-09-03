import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import GridItem from './GridItem'

export default class NumberGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      correct: 1,
    }
  }

  _onPress(num) {
    console.log('At numberGrid, level : ' + this.props.level)
    if (this.state.correct == num) {
      this.setState((prevState) => {
        return {
          correct: prevState.correct + 1,
        }
      })
    }
  }

  render() {
    console.log('JJJJJJJJJ: ' + this.props.level)
    let data = createData(this.props.level)
    const root = Math.ceil(Math.sqrt(data.length))
    data = data.concat(Array.from(new Array(root*root - data.length)).fill(void 0))
    const edge = Math.floor(Dimensions.get('window').width) / root - 5
    const numbers = data.map((e, i) => {
      return (
        <GridItem
          key={i}
          active={e >= this.state.correct}
          edge={edge}
          backgroundColor='#40E0D0'
          num={e}
          onPress={this._onPress.bind(this)}
        />
      )
    })
    return (
      <View style={styles.numbersContainer}>
        {numbers}
      </View>
    )
  }
}

const createData = (level) => {
  let col = level + 3
  let data = Array.from(new Array(col * col)).map((e, i) => i+1)
  // Schwartzian transform
  data = data
          .map((e) => [e, Math.random()])
          .sort((a, b) => a[1] - b[1])
          .map((e) => e[0])
  return data
}

const styles = StyleSheet.create({
  numbersContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})
