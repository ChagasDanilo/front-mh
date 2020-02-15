import React , {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements'

import Styles from '../constants/styles';
import api from '../services/api';

const URL_BASE = 'https://williamestrela.herokuapp.com';

export default function App({ navigation}) {
  const [comprovantes , setComprovantes ] = useState([]);

  useEffect(()=>{
    const handelGetData  = async () =>{
      const response = await api.get('receipt/1');
      //Alert.alert(response.data[0].path);
      setComprovantes(response.data);
    }
    handelGetData();
  },[])

  return (
    <View style={{flex: 1, backgroundColor: '#262626'}}>                
        <SafeAreaView style={Styles.Container}>
            <FlatList
                data={comprovantes}
                renderItem={({item}) => 
                <View style={Styles.ViewItem}>
                  <Text style={Styles.TextDetailItem}>
                    {item.comment}
                  </Text>
                  <Image
                    source={{uri: URL_BASE + item.url}}
                    style={Styles.ImgComp} />
                </View>                                                                       
              }
                keyExtractor={item => item.id.toString()} 
                numColumns={1}
            />            
        </SafeAreaView>
                
        <ActionButton buttonColor="#008044"
        renderIcon={active => active ? (<Icon name="list" style={Styles.actionButtonIcon} /> ) 
                      : (<Icon name="list" style={Styles.actionButtonIcon} />)}
                      >
          <ActionButton.Item
            buttonColor="#00C869"
            title="Ver comprovantes recebidos"
            onPress={() => navigation.navigate('ListaComprovantes')}>
            <Icon name='receipt' color='white' />
          </ActionButton.Item>
        </ActionButton>        
    </View>
  );
};

App.navigationOptions = {
  title: 'Comprovantes emitidos',
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