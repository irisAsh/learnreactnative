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
import { GENRE_LIST } from '../../config/configs'

export default class BookList extends Component {
  componentWillMount() {
    this.setState({realm: this.props.realm})

    let genreData = this.props.realm.objects(GenreModel.schema.name)
    this.setState({genreData})

    let authorData = this.props.realm.objects(AuthorModel.schema.name)
    this.setState({authorData})

    let bookData = this.props.realm.objects(BookModel.schema.name)
    this.setState({bookData})
  }

  render() {
    return (
      <ListBox
        listItems={this.renderList()}
      />
    )
  }

  renderList = () => {
    let activeGenreCode = this.state.genreData
                            .filter((elem) => { return elem.favorite })
                            .map((elem) => { return elem.code })

    let genreCondition = activeGenreCode
                            .map((elem) => { return `genreCode = ${elem}`})
                            .join(' OR ')

    let bookList = this.state.bookData.filtered(genreCondition)

    return (
      bookList.map(elem => {
        return ({
          title: elem.name,
          subtitle: this.getAuthor(elem.authorId),
          leftIcon: this.getGenreIcon(elem.genreCode),
          hideChevron: true,
        })
      })
    )
  }

  getAuthor = (id) => {
    let author = this.state.authorData.filtered(`id = ${id}`)[0]
    return author ? author.name : ''
  }

  getGenreIcon = (code) => {
    let genre = this.state.genreData.filtered(`code = ${code}`)[0]
    let item = GENRE_LIST.find((elem) => { return elem.value === (genre ? genre.value : '')})
    return item ? item.leftIcon : {}
  }
}
