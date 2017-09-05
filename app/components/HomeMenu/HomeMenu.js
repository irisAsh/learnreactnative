import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import HomeMenuItem from './HomeMenuItem'
import { homeMenuData } from '../../route/homeMenuData'

export default class HomeMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.menuContainer}>
        <FlatList
          data={homeMenuData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }

  _keyExtractor = (item, index) => {
    return item.id
  }

  _renderItem = ({item}) => {
    return (
      <HomeMenuItem
        id={item.id}
        title={item.id}
        imageName={item.imageName}
        onPressItem={this._onChooseMenu}
      />
    )
  }

  _onChooseMenu = (screenId) => {
    this.props.navigation.navigate(screenId)
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
  },
})
