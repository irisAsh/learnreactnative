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

import ListBox from '../ListBox'

export default class BookList extends Component {
  render() {
    return (
      <ListBox
        listItems={this.renderList()}
      />
    )
  }

  renderList = () => {
    let data = [
      {
        name: 'きまぐれロボット',
        author: '星進一',
        genre: 'literal',
      },
      {
        name: 'AAAAAA',
        author: 'aaaaaaa',
        genre: 'comics',
      },
      {
        name: 'BBBB',
        author: 'bbbb',
        genre: 'computer',
      },
    ]
    return (
      data.map(elem => {
        return ({
          title: elem.name,
          subtitle: elem.author,
          leftIcon: this.genreToIcon(elem.genre),
          hideChevron: true,
        })
      })
    )
  }

  genreToIcon = (genre) => {
    switch (genre) {
      case 'literal':
        return {
          name: 'book',
          type: 'octicons',
          color: '#FFA912',
        }
      case 'comics':
        return {
          name: 'pokeball',
          type: 'material-community',
          color: '#FF3612',
        }
      case 'computer':
        return {
          name: 'computer',
          color: '#300082',
        }
    }
  }
}
