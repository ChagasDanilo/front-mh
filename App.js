import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './screens/login';
import novaConta from './screens/novaConta';
import listaComp from './screens/listaComprovantes';

const mainNavigation = createSwitchNavigator({  
  Page1: {
    screen: Login    
  },
  NewAccount: {
    screen: novaConta
  },
  ListaComprovantes: {
    screen: listaComp
  },
});

export default createAppContainer(  
  mainNavigation
);