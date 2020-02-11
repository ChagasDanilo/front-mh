import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Login from './screens/login';
import novaConta from './screens/novaConta';
import listaComp from './screens/listaComprovantes';

const mainNavigation = createStackNavigator({  
  Page1: {
    screen: Login    
  },
  NewAccount: {
    screen: novaConta
  },
  ListaComprovantes: {
    screen: listaComp
  },
},
{
  headerMode :'none' 
});

export default createAppContainer(  
  mainNavigation
);