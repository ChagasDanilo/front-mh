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
    backgroundColor: 'transparent',
  },
  ViewInput: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    height: 60,
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
    fontWeight: 'bold',
  },
  TextTitulo: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    paddingStart: 10,
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
    textAlign: 'left',
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    paddingStart: 10,
    marginTop : 5,
  },
  TextDetailItemRight: {
    alignSelf: 'flex-end',
    textAlign: 'left',
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    paddingEnd: 12,
    marginTop : 5,
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
    backgroundColor: '#404040',
    borderColor: 'transparent',
    borderWidth: 20,
    borderRadius: 40,
    padding: 5,
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
    //width: (Dimensions.get("window").width - 15),
    height: (Dimensions.get("window").height / 2),
    resizeMode : 'contain',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    width : '95%',
    //height: 'auto',
  },
  Icone: {
    alignSelf: 'center',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right',
    resizeMode: 'contain'
  },
  ContainerImage:{
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',

  } ,
  Imagem:{
    width: 200,     
    height: 200
  },
  Picker:{
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 0,
    color: '#fff',
    backgroundColor: 'transparent',
    height: 60
  },
});

export default styles