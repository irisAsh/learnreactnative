import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Picker,
  Text,
  View,
} from 'react-native'

import styles from './styles'

export default class SelectBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLabel: '',
      selectedValue: '',
    }
  }

  componentWillMount() {
    this.setState({
      selectedLabel: this.props.items[0].label,
      selectedValue: this.props.items[0].value,
    })
  }

  render() {
    return (
      <View>
        <View style={[styles.container, this.props.containerStyle]}>
          <Text style={[styles.labelText, this.props.labelStyle]}>
            {this.props.label}
          </Text>
          <Text style={[styles.selecedText, this.props.textStyle]}>
            {this.state.selectedLabel}
          </Text>
        </View>
        {this.renderPickerItems(this.state.selectedValue, this.props.items)}
      </View>
    )
  }

  renderPickerItems = (selectedValue, items) => {
    return (
      <Picker
        selectedValue={selectedValue}
        onValueChange={(val, ind) => {this.setState({selectedValue: val})}}
      >
        {items.map((elem, ind) => {
          return (
            <Picker.item
              label={elem.label}
              value={elem.value}
            />
          )
        })}
      </Picker>
    )
  }
}

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.symbol,
  })).isRequired,
  containerStyle: PropTypes.any,
  labelStyle: PropTypes.any,
  textStyle: PropTypes.any,
}
