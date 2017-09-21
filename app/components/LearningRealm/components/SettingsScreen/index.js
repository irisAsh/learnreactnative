import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ListBox from '../ListBox'
import { GENRE_LIST } from '../../config/configs'

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    GENRE_LIST.map(elem => {
      this.setState({[elem.value]: false})
    })
  }

  render() {
    return (
      <ListBox
        listItems={this.renderList(GENRE_LIST)}
      />
    )
  }

  renderList = (data) => {
    return (
      data.map(elem => {
        return ({
          title: elem.label,
          leftIcon: elem.leftIcon,
          hideChevron: true,
          switchButton: true,
          switched: this.state[elem.value],
          onSwitch: value => this.setState({[elem.value]: value})
        })
      })
    )
  }
}
