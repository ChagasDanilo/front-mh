import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native';

import Styles from '../constants/styles';
import api from '../services/api';

const NovaConta = ({ navigation }) => {
  
    const [nome, onChangeNome] = React.useState('');
    const [cpf, onChangeCPF] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');
    
    async function handelStore(){
        const data = {
            username: nome,
            email : email,
            password : senha,
            cpf_cnpj:cpf,
            type: 'U' // coloquei U de usuário e L se fosse logista
        };
        const response = await api.post('user',data);

        if (response.data){
            Alert.alert('Notificação','Usuário criado com sucesso!');
            navigation.navigate('Page1')
        }

    }
    
    return (
    <KeyboardAvoidingView style={Styles.Container} behavior="padding" enabled>
        <View>             
            <View>
                <TextInput                    
                    style={Styles.TextInput}
                    placeholder='Digite seu nome...'
                    textContentType={"name"}
                    onChangeText={nome => onChangeNome(nome)}
                    value={nome}
                    placeholderTextColor={'#fff'}
                    autoFocus={true}
                />
            </View>
            <View>
                <TextInput                    
                    style={Styles.TextInput}
                    placeholder='Digite seu CPF...'
                    keyboardType={'number-pad'}
                    onChangeText={cpf => onChangeCPF(cpf)}
                    value={cpf}
                    placeholderTextColor={'#fff'}
                    maxLength={18}
                />
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
                />
            </View>
            <View>
                <TextInput             
                    style={Styles.TextInput}
                    placeholder='Digite sua senha...'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    textContentType={"newPassword"}
                    autoCorrect={false}
                    onChangeText={senha => onChangeSenha(senha)}
                    value={senha}
                    placeholderTextColor={'#fff'}
                />
            </View>

            <View style={Styles.Botton}>
                <TouchableOpacity
                    onPress={() => handelStore()}
                >
                    <Text style={Styles.Text}>
                        Criar Conta
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    </KeyboardAvoidingView>

)
};

NovaConta.navigationOptions = {
    title: 'Voltar',
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

export default NovaConta;