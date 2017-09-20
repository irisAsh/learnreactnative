import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    margin: 10,
  },
  labelText: {
    alignSelf: 'center',
    fontSize: 16,
    width: 120,
    padding: 4,
    paddingRight: 10,
  },
  inputContainer: {
    justifyContent: 'center',
    width: 180,
    borderColor: 'gray',
    borderWidth: 1
  },
  textStyle: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 4,
    backgroundColor: "#BEBEBE"
  },
  pickerContainer: {
    backgroundColor: '#E0E0E0',
  },
})

export default styles
