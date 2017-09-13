import React, { Component } from 'react'
import {
  ScrollView,
  View,
} from 'react-native'

import { List, ListItem } from 'react-native-elements'

import menuData from './config/menuData'

export default class MenuList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
        >
          {this.renderMenuItems()}
        </ScrollView>
      </View>
    )
  }

  renderMenuItems = () => {
    return (
      <List>
        {
          menuData.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={Object.assign({}, item.icon)}
            />
          ))
        }
      </List>
    )
  }
}
