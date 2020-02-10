import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert, ScrollView } from 'react-native';

import Styles from '../constants/styles';
import { SafeAreaView } from 'react-navigation';

const Lista = ({ navigation }) => {  
    return (
        <SafeAreaView style={Styles.Container}>
            <ScrollView>
                <View>
                    <Text>
                        Lista de Comprovantes testando
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
)};

export default Lista;