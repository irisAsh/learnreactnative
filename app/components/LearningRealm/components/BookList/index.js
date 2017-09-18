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

export default class BookList extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
        >
          <List>
            {this.renderList()}
          </List>
        </ScrollView>
      </View>
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
      data.map((elem, ind) => {
         return (
           <ListItem
            key={ind}
            title={elem.name}
            subtitle={elem.author}
            leftIcon={this.genreToIcon(elem.genre)}
            hideChevron={true}
          />
        )
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
