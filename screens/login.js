import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native';

import Styles from '../constants/styles';

const Login = ({ navigation }) => {
  
    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');
  
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
                    onPress={() => navigation.navigate('ListaComprovantes')}
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