import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import { List, ListItem } from 'react-native-elements'

export default class DisplayMenu extends Component {
  render() {
    return (
      <View>
        <List>
          <ListItem
            title='情報'
          />
          <ListItem
            title='ソフトフェアアップデート'
          />
        </List>
        <List>
          <ListItem
            title='検索'
            titleStyle={{color: 'red', fontSize: 12}}
            titleContainerStyle={{ backgroundColor: '#FFE974'}}
            subtitle='search'
            titleStyle={{color: 'red', fontSize: 12}}
            titleContainerStyle={{ backgroundColor: '#FFE974'}}
          />
          <ListItem
            title='ソフトフェアアップデート'
            hideChevron={true}
          />
          <ListItem
            title='ソフトフェアアップデート'
            hideChevron={true}
            titleNumberOfLines={100}
          />
        </List>
      </View>
    )
  }
}
