import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

const Header = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>React Navigationを学ぶ</Text>
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Text style={styles.back}>Homeへ戻る</Text>
    </TouchableOpacity>
  </View>
)

export default Header
