import React, { Component } from 'react'
import { Platform, View, Text } from 'react-native'
import fs from 'react-native-fs'

import ListBox from '../ListBox'
import { GENRE_LIST } from '../../config/configs'
import GenreModel from '../../models/GenreModel'

import Realm from 'realm'

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const realm = new Realm({
      path: Platform.OS === 'ios'
        ? fs.MainBundlePath + '/default.realm'
        : fs.DocumentDirectoryPath + '/default.realm',
      schema: [GenreModel],
    })
    let genreData = realm.objects(GenreModel.schema.name).sorted('code', true)
    this.setState({
      realm,
      genreData,
    })
    GENRE_LIST.map(elem => {
      let genreItem = realm.objects(GenreModel.schema.name).filtered(`value = "${elem.value}"`)
      if (genreItem.length == 0) {
        if (genreData.length == 0) {
          try {
            realm.write(() => {
              realm.create(GenreModel.schema.name, {
                code: 1,
                value: elem.value,
                label: elem.label,
              })
            })
          } catch (e) {
            console.log(e)
          }
        } else {
          let max = genreData[0]
          try {
            realm.write(() => {
              realm.create(GenreModel.schema.name, {
                code: max.code + 1,
                value: elem.value,
                label: elem.label,
              })
            })
          } catch (e) {
            console.log(e)
          }
        }
        this.setState({[elem.value]: false})
      } else {
        let genre = genreItem[0]
        this.setState({[elem.value]: genre.favorite})
      }
    })
  }

  render() {
    return (
      <ListBox
        listItems={this.renderList(GENRE_LIST)}
      />
    )
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
    }
  }
}
