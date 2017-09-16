import React, { Component } from 'react'
import {
  ScrollView,
  View,
} from 'react-native'

import { List, ListItem } from 'react-native-elements'

import { networkData, generalData } from './config/menuData'

export default class MenuList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
        >
          {this.renderMenuItems(generalData)}
          {this.renderMenuItems(networkData)}
        </ScrollView>
      </View>
    )
  }

  renderMenuItems = (menuData) => {
    return (
      <List>
        {
          menuData.map((item, i) => (
            <ListItem
              {...item}
              key={i}
              onPress={!!item.navigateScreen ? () => this.props.navigation.navigate(item.navigateScreen) : null}
            />
          ))
        }
      </List>
    )
  }
}
