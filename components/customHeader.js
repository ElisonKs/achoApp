import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import gstyles from '../styles/global';

export default class CustomHeader extends React.Component{

   


    render(){
        
        return(
         <View style={styles.container}>
             <Text style={styles.title}>{this.props.title}</Text>
             <Text style={styles.subtitle}>{this.props.subtitle}</Text>
         </View>
            )
    }
}

const styles= StyleSheet.create({
    container:{
        paddingTop:50,
        alignItems:'center',
        borderBottomColor:"#ffffff",
        borderBottomWidth:1
    },
    title:{
        fontSize:18,
        color:"#330066",
        fontWeight:'bold'
    },
    subtitle:{
        fontSize:14,
        color:"#FF5292",
        fontWeight:'bold'
    }
})