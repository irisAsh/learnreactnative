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

  render() {
    const numbers = this.props.gridData.map((e, i) => {
      return (
        <GridItem
          key={i}
          active={e >= this.state.correct}
          edge={this.props.edge}
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

  _onPress(num) {
    if (this.state.correct == num) {
      this.setState((prevState) => {
        return {
          correct: prevState.correct + 1,
        }
      })
    }
  }

  clear() {
    this.setState( {
      correct: 1,
    })
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
