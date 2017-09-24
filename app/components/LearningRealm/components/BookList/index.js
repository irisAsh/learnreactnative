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
import GenreModel from '../../models/GenreModel'
import BookModel from '../../models/BookModel'
import AuthorModel from '../../models/AuthorModel'

export default class BookList extends Component {
  componentWillMount() {
    this.setState({realm: this.props.realm})
    let genreData = this.props.realm.objects(GenreModel.schema.name)
    this.setState({genreData})
  }

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
        genre: 'literature',
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
    let activeGenre = this.state.genreData
                        .filter((elem) => { return elem.favorite })
                        .map((elem) => { return elem.value })
    data = data.filter((elem) => {
      return activeGenre.indexOf(elem.genre) > -1
    })
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
