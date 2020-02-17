import * as React from 'react';
import { Button, Image, View, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import Styles from '../constants/styles';

export default class Comprovante extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (

      <View style={Styles.Container}> 
        <View style={Styles.Botton}>
          <TouchableOpacity                
            onPress={this._pickImage}
            hitSlop={{ top: 10, bottom: 10, left: 5, right: 5 }}
          >
            <Text style={Styles.Text}>
              Login
            </Text>
          </TouchableOpacity>          
        </View>
        <View>
            {image &&
              <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
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
  },  
};