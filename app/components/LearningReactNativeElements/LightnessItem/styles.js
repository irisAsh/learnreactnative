import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
  sliderContainer: {
    flex: 1,
  },
  thumbStyle: {
    shadowColor: '#000000',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  trackStyle: {
    height: 1,
  },
})

export default styles
