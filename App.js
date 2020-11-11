import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'


import Splash from './components/splash'
import Onboarding from './components/onboarding'



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
 

}, {
    initialRouteName: "Splash"
});


export default createAppContainer(AppNavigator);