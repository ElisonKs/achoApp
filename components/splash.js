import React from 'react';
import {View,Text,StyleSheet,AsyncStorage} from 'react-native';


export default class Splash extends React.Component{

    

data;
    render(){


        return(
        <View style = {styles.container}>
            <Text>Aqui fica o Splash</Text>
        </View>
        )
    }



loadingTimeforSplash = async () => {
    return new Promise((resolve) =>
        setTimeout(
            () => { resolve('result') },
            2000
        )
    )
}

 async componentDidMount() {
   console.log("aqui splash")
    
    const { navigation } = this.props;

       this.data = await this.loadingTimeforSplash();
        const week = await AsyncStorage.getItem('currentWeek');
        const birthDate = await AsyncStorage.getItem('birthDate');
       

        if (this.data !== null) {
            if(week || birthDate)
              this.props.navigation.navigate('Home')
            else
             this.props.navigation.navigate('Onboarding')
        }

}

}



const styles = StyleSheet.create({
    container:{
        textAlign:"center",
        justifyContent:"center",
        flex:1
        
    }
})