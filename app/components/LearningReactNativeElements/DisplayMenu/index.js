import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import {
  List,
  ListItem,
  Icon,
  Slider,
} from 'react-native-elements'

import LightnessItem from '../LightnessItem'

import styles from './styles'

export default class DisplayMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      autoLight: false,
      bold: false,
    }
  }

  render() {
    return (
      <View>
        <List>
          <ListItem
            component={LightnessItem}
            bold={this.state.bold}
          />
          <ListItem
            title='明るさの自動調節'
            titleStyle={this.state.bold ? styles.boldStyle : {}}
            rightTitle={this.state.autoLight ? 'オン' : 'オフ'}
            rightTitleStyle={[
              styles.autoLightRightTitleStyle,
              this.state.bold ? styles.boldStyle : {},
            ]}
            hideChevron={true}
            switchButton={true}
            onSwitch={(value) => this._onSwitchAutoLight(value)}
            switched={this.state.autoLight}
          />
        </List>
        <List>
          <ListItem
            title='文字を太くする'
            titleStyle={this.state.bold ? styles.boldStyle : {}}
            hideChevron={true}
            switchButton={true}
            onSwitch={(value) => this._onSwitchBold(value)}
            switched={this.state.bold}
          />
        </List>
      </View>
    )
  }

  _onSwitchAutoLight = (value) => {
    this.setState({
      autoLight: value,
    })
  }

  _onSwitchBold = (value) => {
    this.setState({
      bold: value,
    })
  }
}
