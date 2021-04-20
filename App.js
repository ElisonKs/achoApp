import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import CustomHeader from './components/customHeader'
import Splash from './components/splash'
import Onboarding from './components/onboarding'
import Login from './components/login'
import RecoverPassword from './components/recoverPassword'
import WorkerRegister1 from './components/workerRegister1'
import WorkerRegister2 from './components/workerRegister2'
import Home from './components/home'



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
    WorkerRegister1: {
        screen: WorkerRegister1,
        navigationOptions: {
            header: ()=> <CustomHeader title={"Cadastro de Prestador 1/6"} subtitle={"Dados Pessoais"} />      }
    },
    WorkerRegister2: {
        screen: WorkerRegister2,
        navigationOptions: {
            header: ()=> <CustomHeader title={"Cadastro de Prestador 2/6"} subtitle={"Serviços"} />      }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false        }
    },
 

}, {
    initialRouteName: "Splash"
});


export default createAppContainer(AppNavigator);