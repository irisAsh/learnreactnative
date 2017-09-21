import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  View,
 } from 'react-native'
import {
  List,
  ListItem,
} from 'react-native-elements'

import styles from './styles'

export default class ListBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
        >
          <List>
            {this.renderList(this.props.listItems)}
          </List>
        </ScrollView>
      </View>
    )
  }

  renderList = (data) => {
    return (
      data.map((elem, ind) => {
         return (
           <ListItem
            key={ind}
            {...elem}
          />
        )
      })
    )
  }
}

ListBox.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}
