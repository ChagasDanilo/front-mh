import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#262626',    
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 40,
    fontSize: Constants.systemFonts.size,
    fontStyle: Constants.systemFonts.style,
  },
  ContainerLogin: {
    flex: 1,
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
    backgroundColor: '#00C869',
    alignItems: 'stretch',
    borderRadius: 5,
  },
  Text: {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  TextTitulo: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    paddingStart: 10,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  TextRight: {
    textAlign: 'right',
    alignItems: 'flex-end',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  TextDetailItem: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    paddingStart: 10,
    marginBottom: 5,
  },
  Logo: {
    width: 150,
    height: 120,
    resizeMode : 'cover',
  },
  ViewLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  ViewItem: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  Espacamento: {
    marginTop: 10,
  },
  ViewRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  ImgComp: {
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").height / 2),
    resizeMode : 'contain',
    alignContent: 'center',
    alignSelf: 'center',
    margin: 20,
  },
});

export default styles