import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  StyleSheet,
  View,
} from 'react-native'

import styles from './styles'

export default class LevelButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[{backgroundColor: this.props.buttonColor}, styles.buttonBox]}>
        <Button
          title={this.props.buttonName}
          color='#FFFFFF'
          onPress={() => this.props.onPress(this.props.level)}
        />
      </View>
    )
  }
}

LevelButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonColor: PropTypes.string,
}

LevelButton.defaultProps = {
  buttonColor: '#2BBFFF',
}
