import React, { Component } from 'react'
import {
  Animated,
  PanResponder,
  StyleSheet,
  View,
} from 'react-native'

export default class FlickGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pan: new Animated.ValueXY,
    }
  }

  componentWillMount() {
    this._animatedValueX = 0
    this._animatedValueY = 0
    this.state.pan.x.addListener((value) => this._animatedValueX = value.value)
    this.state.pan.y.addListener((value) => this._animatedValueY = value.value)

    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this._animatedValueX, y: this._animatedValueY})
        this.state.pan.setValue({x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.pan.x, dy: this.state.pan.y}
      ]),
      onPanResponderRelease: () => {
        this.state.pan.flattenOffset()
      }
    })
  }

  componentWillUnmount() {
    this.state.pan.x.removeAllListeners()
    this.state.pan.y.removeAllListeners()
  }

  flattenOffset() {
    this._value += this._offset
    this._offset = 0
  }

  render() {
    return (
      <View>
        <Animated.View
          style={this.getStyle()}
          {...this._panResponder.panHandlers}
        />
      </View>
    )
  }

  getStyle = () => [
    styles.square,
    {transform: this.state.pan.getTranslateTransform}
  ]
}


const SQUARE_DIMENSIONS = 100

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SQUARE_DIMENSIONS,
    height: SQUARE_DIMENSIONS,
    backgroundColor: 'blue',
  },
})
