import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
} from 'react-native'

import {
  Icon,
  Slider,
} from 'react-native-elements'

import styles from './styles'

export default class LightnessItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColorValue: 0,
    }
  }

  render() {
    const g = 255 * (1 - this.state.backgroundColorValue)
    const b = 255 - 105 * this.state.backgroundColorValue
    const color = 'rgb(255, ' + g + ', ' + b + ')'

    return (
      <View style={[styles.container, {backgroundColor: color,}]}>
        <Icon
          name='ios-sunny'
          type='ionicon'
          color={this.props.bold ? '#000000' : '#999999'}
          size={20}
          style={styles.icon}
        />
        <View style={styles.sliderContainer}>
          <Slider
            thumbTintColor='white'
            thumbStyle={styles.thumbStyle}
            minimumTrackTintColor='#3E5EFF'
            trackStyle={styles.trackStyle}
            onValueChange={(value) => this._onChangeSlider(value)}
          />
        </View>
        <Icon
          name='ios-sunny'
          type='ionicon'
          color={this.props.bold ? '#000000' : '#999999'}
          style={styles.icon}
        />
      </View>
    )
  }

  _onChangeSlider = (value) => {
    this.setState({
      backgroundColorValue: value,
    })
  }
}

LightnessItem.propTypes = {
  bold: PropTypes.bool,
}

LightnessItem.defaultTypes = {
  bold: false,
}
