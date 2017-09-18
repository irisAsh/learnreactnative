import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Dimensions,
  Text,
  View,
} from 'react-native'

import GridItem from '../GridItem'
import styles from './styles'

export default class NumberGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      correct: 1,
      maxNumber: Math.max.apply({}, this.props.gridData),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      maxNumber: Math.max.apply({}, nextProps.gridData),
    })
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
    if (this.state.correct == 1) {
      this.props.start()
    }
    if (this.state.correct == num) {
      this.setState((prevState) => {
        return {
          correct: prevState.correct + 1,
        }
      })
    }
    if (this.state.correct == this.state.maxNumber) {
      this.props.stop()
    }
  }

  clear() {
    this.setState( {
      correct: 1,
    })
  }
}

NumberGrid.propTypes = {
  gridData: PropTypes.arrayOf(PropTypes.number).isRequired,
  edge: PropTypes.number.isRequired,
  start: PropTypes.func,
  stop: PropTypes.func,
}

NumberGrid.propTypes = {
  start: () => console.log('No start function'),
  stop: () => console.log('No stop function'),
}
