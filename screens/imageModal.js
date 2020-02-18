import React, {useState, useEffect} from 'react';
import { Button, Image, View, TouchableOpacity, TouchableWithoutFeedback ,Text, 
  KeyboardAvoidingView, TextInput, Picker, Alert, Platform,
  Keyboard } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import Styles from '../constants/styles';
import styles from '../constants/styles';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import api from '../services/api';

const  Comprovante  = function({navigation}) {
  const [valor, onChangeValor] = useState('');
  const [destino, onChangeDestino] = useState('');
  const [descricao, onChangeDescricao] = useState('');
  const [image, onChangeImage] = useState(null);
  const [destinatarios, setDestinatarios] = useState([]);

  useEffect(() =>{
    const getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Desculpe, precisamos de permissões de rolo da câmera para fazer isso funcionar!');
        }
      }
    }
    const getDestinatarios  = async () =>{
      try {
        
        const response = await api.get('user');
        if (response.data){
          setDestinatarios(response.data);
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar a lista de destinatários.');
      }
      

    }

    getPermissionAsync();
    getDestinatarios()
  },[])
  
  

  async function _pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      onChangeImage(result);
    }
  };

  async function handleSubmit(){

    let uriParts = image.uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    const dataImage = {
      name: 'Receipt.'+fileType,
      clientName: 'Receipt.'+fileType,
      type: 'image/' + image.fileType,
      uri:Platform.OS === "android" ? image.uri : image.uri.replace("file://", "")
    }

    // uri:Platform.OS === "android" ? image.uri : image.uri.replace("file://", "")
    
    const data = new FormData();
    data.append('value', valor);
    data.append('user_recipient_id', destino);
    data.append('comment', descricao);
    data.append('file', dataImage);      

    try {
      const response = await api.post('receipt',data);
      if (response.data){
        console.log(response.data);
          
        // histore.push('/');

        // toast.success('Salvo com sucesso!')
        navigation.navigate('ListaComprovantes')
      }
    } catch (error) {
      // toast.error('Erro ao realizar envio. Tente novamente!' +error)
      Alert.alert('Erro','Erro ao realizar envio. Tente novamente!');
      console.log(error);
    }
  }


    //let { image } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <KeyboardAvoidingView style={Styles.Container} behavior="padding" enabled={true}>
        
        <View>             
            <View>
                <TextInput                    
                    style={Styles.TextInput}
                    placeholder='Qual o valor do comprovante...'
                    keyboardType={"numeric"}
                    onChangeText={valor => onChangeValor(valor)}
                    value={valor}
                    placeholderTextColor={'#fff'}
                    autoFocus={true}
                />
            </View>
            <View style={Styles.ViewInput}>
                <Picker
                  onValueChange={destino => onChangeDestino(destino)}
                  selectedValue={destino}
                  style={Styles.Picker}
                  itemStyle={{height: 60, color: '#fff'}}                  
                  
                >
                  <Picker.Item label='Selecione' value=''/>
                  {destinatarios.map(dest =><Picker.Item key={dest.id} label={dest.username} value={dest.id}/>)}
                </Picker>               
            </View>              
            <View>
                <TextInput                    
                    style={Styles.TextInput}
                    placeholder='Digite alguma descrição...'
                    multiline={true}
                    onChangeText={descricao => onChangeDescricao(descricao)}
                    value={descricao}
                    placeholderTextColor={'#fff'}
                />
            </View>

            <View style={Styles.Botton}>
            <TouchableOpacity                
              onPress={() =>[
                _pickImage()
              ]}
              hitSlop={{ top: 10, bottom: 10, left: 5, right: 5 }}
            >
              <Text style={Styles.Text}>
                Adicionar arquivo
              </Text>
            </TouchableOpacity>          
          </View>
          <View style={styles.ContainerImage}>
              {image &&
                <Image source={{ uri: image.uri }} style={styles.Imagem} />}
          </View>
        </View>        
        <View style={Styles.Botton}>
            <TouchableOpacity                
              onPress={handleSubmit}
              hitSlop={{ top: 10, bottom: 10, left: 5, right: 5 }}
            >
              <Text style={Styles.Text}>
                Enviar
              </Text>
            </TouchableOpacity>          
          </View>   
           
    </KeyboardAvoidingView>  
    </TouchableWithoutFeedback>     
    );

  
};

Comprovante.navigationOptions = {
  title: 'Adicionar comprovante',
  gestureEnabled: true,
  headerStyle: {
    backgroundColor: '#262626',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,      
  },
  headerTintColor: '#00C869',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
};

export default Comprovante;