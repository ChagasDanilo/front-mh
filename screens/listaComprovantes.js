import React , { useState, useEffect, Component } from 'react';
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements';
import moment from "moment";

import Styles from '../constants/styles';
import api from '../services/api';
import Loading from './Loading';
import ModalCustom from './Modal';

const URL_BASE = 'https://williamestrela.herokuapp.com';

export default function App({ navigation }) {  
  const [comprovantes , setComprovantes ] = useState([]);

  useEffect(()=>{
    const handelGetData  = async () =>{                
      const response = await api.get('receipt');
      
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
                      {item.usersIssuer.username}
                    </Text>
                    <Text style={Styles.TextDetailItem}>
                      {item.comment}
                    </Text>
                    <Text style={Styles.TextDetailItem}>
                      {item.value}
                    </Text>
                    <Image
                      source={{uri: URL_BASE + item.url}}
                      style={Styles.ImgComp}
                      />
                    <Text style={Styles.TextDetailItemRight}>
                      {moment(item.created_at).format('DD/MM/YYYY')} às {moment(item.created_at).format('hh:mm:ss')}                      
                    </Text>
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
          {/*
          <ActionButton.Item
            buttonColor="#00C869"
            title="Ver comprovantes emitidos"
            onPress={() => navigation.navigate('ListaComprovantesEmitidos')}>            
            <Icon name='receipt' color='white' />
          </ActionButton.Item>
          */}
          <ActionButton.Item
            buttonColor="#00C869"
            title="Enviar Comprovante"
            onPress={() => navigation.navigate('AddComprovante')}>            
            <Icon name='receipt' color='white' />
          </ActionButton.Item>
        </ActionButton>        
    </View>
  );
};

App.navigationOptions = {
  title: 'Seus comprovantes',
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