import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

export default class GridItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const backgroundColor = this.props.active ? this.props.backgroundColor : '#DCDCDC'
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.num)}
      >
        <View
          style={[
            {
              width: this.props.edge,
              height: this.props.edge,
              backgroundColor: backgroundColor,
            },
            styles.squre
          ]}
        >
          <Text>{this.props.num === void 0 ? '' : this.props.num}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

GridItem.propTypes = {
  edge: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
  active: PropTypes.bool,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
}

GridItem.defaultProps = {
  active: false,
  backgroundColor: '#2BBFFF',
}
