import DisplayMenu from '../DisplayMenu'
import NoticeMenu from '../NoticeMenu'

export const LearningReactNativeElementsRoute = {
  DisplayMenu: {
    screen: DisplayMenu,
    navigationOptions: {
      title: '画面表示と明るさ',
    }
  },
  NoticeMenu: {
    screen: NoticeMenu,
    navigationOptions: {
      title: '通知',
    }
  },
}
