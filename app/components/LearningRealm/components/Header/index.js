import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

import styles from './styles'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={{ name: 'book', type: 'font-awesome' }}
          title='REGISTER'
          buttonStyle={styles.registerButtonStyle}
          onPress={() => this.props.navigation.navigate('RegisterScreen')}
        />
        <Button
          icon={{ name: 'settings', type: 'simple-line-icon' }}
          title='SETTINGS'
          buttonStyle={styles.settingsButtonStyle}
          onPress={() => this.props.navigation.navigate('SettingsScreen')}
        />
      </View>
    )
  }
}
