import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'


import Splash from './components/splash'
import Onboarding from './components/onboarding'
import Login from './components/login'
import RecoverPassword from './components/recoverPassword'



const AppNavigator = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            headerShown: false        }
    },
    Onboarding: {
        screen: Onboarding,
        navigationOptions: {
            headerShown: false        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false        }
    },
    RecoverPassword: {
        screen: RecoverPassword,
        navigationOptions: {
            headerShown: false        }
    },
 

}, {
    initialRouteName: "Splash"
});


export default createAppContainer(AppNavigator);