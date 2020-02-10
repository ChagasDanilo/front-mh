import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#262626',    
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: Constants.systemFonts.size,
    fontStyle: Constants.systemFonts.style,
  },
  ContainerLogin: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#262626',
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: Constants.systemFonts.size,
    fontStyle: Constants.systemFonts.style,
  },
  TextInput: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 20,
    color: '#fff',
  },
  Botton: {
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#00aaff',
    alignItems: 'stretch',
    borderRadius: 5,
  },
  Text: {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  TextRight: {
    textAlign: 'right',
    alignItems: 'flex-end',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  Logo: {
    width: 120,
    height: 120,
    resizeMode : 'stretch',
  },
  ViewLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  Espacamento: {
    marginTop: 10,
  }
});

export default styles