import LearningRealm from '../index'
import RegisterScreen from '../components/RegisterScreen'
import SettingsScreen from '../components/SettingsScreen'

export const LearningRealmRoute = {
  LearningRealm: {
    screen: LearningRealm,
    navigationOptions: {
      title: 'LearningRealm',
    }
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: '登録',
    }
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      title: '設定',
    }
  },
}
