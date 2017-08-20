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
    let data=[1,2,3,4,5,6,7,8,9]
    // Schwartzian transform
    data = data
            .map((e) => [e, Math.random()])
            .sort((a, b) => a[1] - b[1])
            .map((e) => e[0])
    const root = Math.ceil(Math.sqrt(data.length))
    data = data.concat(Array.from(new Array(root*root - data.length)).fill(void 0))
    const edge = Math.floor(Dimensions.get('window').width) / root - 5
    this.state = {
      correct: 1,
      edge: edge,
      gridData: data,
    }
  }

  _onPress(num) {
    if (this.state.correct == num) {
      this.setState((prevState) => {
        return {
          correct: prevState.correct + 1,
        }
      })
    }
  }

  render() {
    const numbers = this.state.gridData.map((e, i) => {
      return (
        <GridItem
          key={i}
          active={e >= this.state.correct}
          edge={this.state.edge}
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

const styles = StyleSheet.create({
  numbersContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})
