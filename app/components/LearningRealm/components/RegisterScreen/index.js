import React, { Component } from 'react'
import {
  Platform,
  Text,
  View,
} from 'react-native'
import { Button } from 'react-native-elements'
import fs from 'react-native-fs'
import Realm from 'realm'

import TextBox from '../TextBox'
import SelectBox from '../SelectBox'
import ErrorScene from '../ErrorScene'
import { GENRE_LIST } from '../../config/configs'
import GenreModel from '../../models/GenreModel'
import BookModel from '../../models/BookModel'
import AuthorModel from '../../models/AuthorModel'
import styles from './styles'

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookName: '',
      author: '',
      genre: '',
      error: false,
      inputError: false,
    }
  }

  componentWillMount() {
    const realm = new Realm({
      //path: Platform.OS === 'ios'
        //? fs.MainBundlePath + '/default.realm'
        //: fs.DocumentDirectoryPath + '/default.realm',
      schema: [GenreModel, BookModel, AuthorModel],
    })
    console.log(realm.path)
    this.setState({realm})
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorScene />
      )
    } else {
      return (
        <View style={styles.container}>
          <TextBox
            label='書籍名'
            onChangeText={this.setBookName}
            text={this.state.bookName}
          />
          <TextBox
            label='著者名'
            onChangeText={this.setAuthor}
            text={this.state.author}
          />
          <SelectBox
            label='ジャンル'
            items={GENRE_LIST}
            selectedValue={this.state.genre}
            onValueChange={value => this.setGenre(value)}
          />
          <Button
            icon={{ name: 'book', type: 'font-awesome' }}
            title='REGISTER'
            buttonStyle={styles.registerButtonStyle}
            onPress={() => this.registerBook()}
          />
          { this.state.inputError &&
            <Text style={styles.errorText}>入力にエラーがあります。</Text>
          }
        </View>
      )
    }
  }

  setBookName = (bookName) => {
    this.setState({ bookName })
  }

  setAuthor = (author) => {
    this.setState({ author })
  }

  setGenre = (genre) => {
    this.setState({ genre })
  }

  registerBook = () => {
    if (this.state.bookName === '' || this.state.author === '' || this.state.genre === '') {
      this.setState({inputError: true})
      return
    }
    this.setState({inputError: false})

    let authorList = this.state.realm
                      .objects(AuthorModel.schema.name)
                      .sorted('id', true)
    let author = authorList.filtered(`name = "${this.state.author}"`)
    if (author.length == 0) {
      let newAuthorId = authorList.length == 0 ? 1 : (authorList[0].id + 1)
      let result = this.realmCreate(
                    this.state.realm,
                    AuthorModel.schema.name,
                    {
                      id: newAuthorId,
                      name: this.state.author,
                    },
                    true
                  )
      if (!result) return
    }

    let bookList = this.state.realm
                    .objects(BookModel.schema.name)
                    .sorted('id', true)
    let book = bookList.filtered(`name = "${this.state.bookName}" AND authorId = ${author[0].id}`)
    let bookId = book.length != 0
                  ? book[0].id
                  : (bookList.length == 0 ? 1 : (bookList[0].id + 1))

    let genre = this.state.realm
                  .objects(GenreModel.schema.name)
                  .filtered(`value = "${this.state.genre}"`)

    this.realmCreate(
      this.state.realm,
      BookModel.schema.name,
      {
        id: bookId,
        name: this.state.bookName,
        authorId: author[0].id,
        genreCode: genre[0].code,
      },
      true
    )

    this.setState({
      bookName: '',
      author: '',
      genre: '',
    })
  }

  realmCreate = (realm, schemaName, data, upsertFlg = true) => {
    try {
      realm.write(() => {
        realm.create(schemaName, data, upsertFlg)
      })
    } catch (e) {
      console.log(e)
      this.setState({error: true})
      return false
    }
    return true
  }
}
