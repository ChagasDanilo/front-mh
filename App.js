import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './screens/login';

const mainNavigation = createSwitchNavigator({  
  Page1: {
    screen: Login
  },
});

export default createAppContainer(  
  mainNavigation
);