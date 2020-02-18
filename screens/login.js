import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert,
    AsyncStorage } from 'react-native';

import Styles from '../constants/styles';
import api from '../services/api';

const Login = ({ navigation }) => {
  
    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');

    async function handleSubmit (){
        try {
            const data = {
                password: senha,
                email : email
            }
            const response = await api.post('login',data);
            if (response.data.token){
                await AsyncStorage.setItem('@mh-token', response.data.token);                
                
                navigation.navigate('ListaComprovantes');
                
            }else{
                Alert.alert('Erro','Verifique o e-mail e senha e tente novamente!')  
            }
        } catch (error) {
            Alert.alert('Erro','Erro ao realizar login. Tente novamente!')
        }
    }
    return (
    <KeyboardAvoidingView style={Styles.ContainerLogin} behavior="padding" enabled>
        <View style={Styles.ContainerLogin}>
            
            <View style={Styles.ViewLogo}>
            <Image 
                source={require('../assets/images/icone.png')}
                style={Styles.Logo} />
            </View>
            
            <View>
                <TextInput                    
                    style={Styles.TextInput}
                    placeholder='Digite seu email...'
                    textContentType={"emailAddress"}
                    keyboardType={'email-address'}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={email => onChangeEmail(email)}
                    value={email}
                    placeholderTextColor={'#fff'}
                    autoFocus={true}
                />
            </View>
            <View>
                <TextInput             
                    style={Styles.TextInput}
                    placeholder='Digite sua senha...'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType={"password"}
                    onChangeText={senha => onChangeSenha(senha)}
                    value={senha}
                    placeholderTextColor={'#fff'}
                />
            </View>

            <View style={Styles.Botton}>
                <TouchableOpacity                
                    onPress={handleSubmit}
                    hitSlop={{ top: 10, bottom: 10, left: 5, right: 5 }}
                >
                    <Text style={Styles.Text}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.Espacamento}/>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('NewAccount')}
                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                >
                    <Text style={Styles.TextRight}>
                        Não possui conta?
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    </KeyboardAvoidingView>

)
};

export default Login;