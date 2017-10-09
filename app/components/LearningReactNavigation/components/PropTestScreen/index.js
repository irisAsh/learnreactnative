import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'

import styles from './styles'

const PropTestScreen = ({ navigation }) => {
  const { params } = navigation.state
  return (
    <View style={[
      styles.container,
      params.screenColor && {backgroundColor: params.screenColor},
    ]}>
      <Text style={[
        styles.textStyle,
        {fontWeight: params.changeFlag ? 'bold' : 'normal'},
      ]}>
        {params.screenText}
      </Text>
      <Button
        title='Change'
        color='#FFFEF4'
        style={styles.buttonStyle}
        onPress={() => navigation.setParams({changeFlag: !params.changeFlag})}
      />
      <Button
        title='Go Back'
        color='#FFFEF4'
        style={styles.buttonStyle}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default PropTestScreen
