import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack'

import Login from './screens/login';
import novaConta from './screens/novaConta';
import listaComp from './screens/listaComprovantes';
import listaCompEmitidos from './screens/listaCompEmitidos';
import AddImage from './screens/imageModal';

const mainNavigation = createStackNavigator({  
  Page1: {
    screen: Login,
    navigationOptions: {
      headerShown: false,      
    }
  },
  NewAccount: {
    screen: novaConta,   
  },
  ListaComprovantes: {
    screen: listaComp,
  },
  ListaComprovantesEmitidos: {
    screen: listaCompEmitidos,
  },
  AddComprovante: {
    screen: AddImage,
  }
},
{
  headerMode :'screen',
}
);

export default createAppContainer(  
  mainNavigation
);