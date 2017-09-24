import React, { Component } from 'react'
import {
  Platform,
  Text,
  View,
} from 'react-native'
import fs from 'react-native-fs'
import Realm from 'realm'

import Header from './components/Header'
import BookList from './components/BookList'
import GenreModel from './models/GenreModel'
import BookModel from './models/BookModel'
import AuthorModel from './models/AuthorModel'

export default class LearningRealm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastDate: new Date(),
    }
  }

  componentWillMount() {
    const realm = new Realm({
      path: Platform.OS === 'ios'
        ? fs.MainBundlePath + '/default.realm'
        : fs.DocumentDirectoryPath + '/default.realm',
      schema: [GenreModel, BookModel, AuthorModel],
    })
    console.log(realm.path)
    this.setState({realm})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header {...this.props}
          navigateParams={{
            refresh: this.updateDate,
            realm: this.state.realm,
          }}
        />
        <BookList
          realm={this.state.realm}
        />
      </View>
    )
  }

  updateDate = () => {
    this.setState({
      lastDate: new Date(),
    })
  }
}
