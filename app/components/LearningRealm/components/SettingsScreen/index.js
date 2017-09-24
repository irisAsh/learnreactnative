import React, { Component } from 'react'
import { Platform, View, Text } from 'react-native'
import fs from 'react-native-fs'
import Realm from 'realm'

import ListBox from '../ListBox'
import ErrorScene from '../ErrorScene'
import { GENRE_LIST } from '../../config/configs'
import GenreModel from '../../models/GenreModel'
import BookModel from '../../models/BookModel'
import AuthorModel from '../../models/AuthorModel'

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
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
    this.setUpGenreList(realm)
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorScene />
      )
    } else {
      return (
        <ListBox
          listItems={this.renderList(GENRE_LIST)}
        />
      )
    }
  }

  renderList = (data) => {
    return (
      data.map(elem => {
        return ({
          title: elem.label,
          leftIcon: elem.leftIcon,
          hideChevron: true,
          switchButton: true,
          switched: this.state[elem.value],
          onSwitch: value => this.onSwitch(elem.value, value)
        })
      })
    )
  }

  onSwitch = (key, value) => {
    this.setState({[key]: value})
    try {
      this.state.realm.write(() => {
        let genre = this.state.genreData.filtered(`value = "${key}"`)[0]
        genre.favorite = value
      })
    } catch (e) {
      console.log(e)
      this.setState({error: true})
    }
    this.props.navigation.state.params.refresh()
  }

  setUpGenreList = (realm) => {
    let genreData = realm.objects(GenreModel.schema.name).sorted('code', true)
    this.setState({genreData})

    GENRE_LIST.map(elem => {
      let genreItem = genreData.filtered(`value = "${elem.value}"`)

      if (genreItem.length == 0) {
        let newCode = genreData.length == 0 ? 1 : (genreData[0].code + 1)
        this.realmCreate(realm, GenreModel.schema.name, {
          code: newCode,
            value: elem.value,
            label: elem.label,
        })
        this.setState({[elem.value]: false})
      } else {
        this.setState({[elem.value]: genreItem[0].favorite})
      }
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
    }
  }
}
