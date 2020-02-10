import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native';

import Styles from '../constants/styles';

const NovaConta = ({ navigation }) => {
  
    const [nome, onChangeNome] = React.useState('');
    const [cpf, onChangeCPF] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');
  
    return (
    <KeyboardAvoidingView style={Styles.Container} behavior="padding" enabled>
        <View style={Styles.Container}>             
            <View>
                <TextInput                    
                    style={Styles.TextInput}
                    placeholder='Nome'
                    textContentType={"name"}
                    onChangeText={nome => onChangeNome(nome)}
                    value={nome}
                />
            </View>
            <View>
                <TextInput                    
                    style={Styles.TextInput}
                    placeholder='CPF'
                    keyboardType={'number-pad'}
                    onChangeText={cpf => onChangeCPF(cpf)}
                    value={cpf}
                />
            </View>              
            <View>
                <TextInput                    
                    style={Styles.TextInput}
                    placeholder='Email'
                    textContentType={"emailAddress"}
                    keyboardType={'email-address'}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={email => onChangeEmail(email)}
                    value={email}
                />
            </View>
            <View>
                <TextInput             
                    style={Styles.TextInput}
                    placeholder='Senha'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    textContentType={"newPassword"}
                    autoCorrect={false}
                    onChangeText={senha => onChangeSenha(senha)}
                    value={senha}
                />
            </View>

            <View style={Styles.Botton}>
                <TouchableOpacity
                    onPress={() => Alert.alert('Nome: ' + nome + ' CPF: ' + cpf + 'Email: ' + email + ' Senha: ' + senha)}
                >
                    <Text style={Styles.Text}>
                        Criar Conta
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    </KeyboardAvoidingView>

)};

export default NovaConta;