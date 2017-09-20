import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  Picker,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import styles from './styles'

export default class SelectBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  render() {
    const selectedItem = this.props.items.find(elem => elem.value === this.props.selectedValue)
    const selectedLabel = selectedItem ? selectedItem.label : ''

    return (
      <View>
        <View style={[styles.container, this.props.containerStyle]}>
          <Text style={[styles.labelText, this.props.labelStyle]}>
            {this.props.label}
          </Text>
          <TouchableOpacity
            onPress={() => this.setState({modalVisible: true})}
            style={[styles.inputContainer, this.props.inputStyle]}
          >
            <Text
              style={[styles.textStyle, this.props.textStyle]}
            >
              {selectedLabel}
            </Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
        >
          <TouchableWithoutFeedback
            onPress={() => {this.setState({modalVisible: false})}}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text
                  style={{color: 'blue'}}
                  onPress={() => {this.setState({modalVisible: false})}}
                >
                  Done
                </Text>
              </View>
              <View
                style={styles.pickerContainer}
                onStartShouldSetResponder={evt => true}
                onResponderReject={evt => {}}
              >
                <Picker
                  selectedValue={this.props.selectedValue}
                  onValueChange={this.props.onValueChange}
                >
                  {this.props.items.map((i, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={i.label}
                        value={i.value}
                      />
                    )
                  })}
                </Picker>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    )
  }
}

SelectBox.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  containerStyle: PropTypes.any,
  labelStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  textStyle: PropTypes.any,
}
