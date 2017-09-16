export const networkData = [
  {
    title: '機内モード',
    hideChevron: true,
    leftIcon: {
      name: 'airplanemode-active',
    },
  },
  {
    title: 'Wi-Fi',
    hideChevron: true,
    leftIcon: {
      name: 'wifi-tethering',
      color: '#7EDDFF',
    },
  },
  {
    title: 'Bluetooth',
    hideChevron: true,
    leftIcon: {
      name: 'ios-bluetooth',
      color: '#3A57FF',
      type: 'ionicon',
    },
  },
  {
    title: 'データ通信',
    hideChevron: true,
    leftIcon: {
      name: 'access-point',
      color: 'white',
      type: 'material-community',
      style: {
        backgroundColor: '#1CEC26',
      },
    },
  },
]

export const generalData = [
  {
    title: '通知',
    leftIcon: {
      name: 'bell-ring',
      type: 'material-community',
      color: '#FF4290',
    },
    navigateScreen: 'NoticeMenu',
  },
  {
    title: '画面表示と明るさ',
    leftIcon: {
      name: 'tablet-ipad',
      color: 'white',
      type: 'material-community',
      style: {
        padding: 2,
        backgroundColor: 'blue',
      },
    },
    navigateScreen: 'DisplayMenu',
  },
]
