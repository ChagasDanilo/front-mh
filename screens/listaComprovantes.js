import React ,{useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, Alert } from 'react-native';
import Constants from 'expo-constants';

import Styles from '../constants/styles';
import api from '../services/api';

const URL_BASE = 'https://williamestrela.herokuapp.com';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: {uri: URL_BASE + 'receipt/1/file'},
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: {uri: URL_BASE + 'receipt/1/file'},
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: {uri: URL_BASE + 'receipt/1/file'},
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    title: 'Third Item',
    image: {uri: URL_BASE + 'receipt/1/file'},
  },
];

export default function App() {
  const [comprovantes , setComprovantes ] = useState([]);

   

  useEffect(()=>{
    const handelGetData  = async () =>{
      const response = await api.get('receipt/1');
      Alert.alert(response.data[0].path);
      setComprovantes(response.data);
    }
    handelGetData();
  },[])

  return (
    <View style={{flex: 1, backgroundColor: '#262626'}}>                
        <SafeAreaView style={Styles.Container}>
            <Text style={Styles.TextTitulo}>
                Seus comprovantes
            </Text>

            <FlatList
                data={comprovantes}
                renderItem={({item}) => 
                <View style={Styles.ViewItem}>
                  <Image
                    source={{uri: URL_BASE + item.url}}
                    style={Styles.ImgComp} />
                    <Text style={Styles.TextDetailItem}>
                      {item.comment}
                    </Text>
                </View>                         
                  
                                
              }
                keyExtractor={item => item.id} 
                numColumns={1}
            />
        </SafeAreaView>
    </View>
  );
};