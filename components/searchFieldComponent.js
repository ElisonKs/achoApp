import React from 'react'
import {View,Text,Input,Image,TextInput, StyleSheet} from 'react-native'

export default class SearchFieldComponent extends React.Component{

    render(){

        return(
            <View style={styles.container}>
                <TextInput placeholder="Pesquisar" placeholderTextColor="#FF5292" style={styles.inputField}></TextInput>
                <Image style={styles.searchIcon} source={require('./../assets/images/icon_search.png')}></Image>
                <Image style={styles.marginLeft} source={require('./../assets/images/icon_notification.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginBottom:5
    },
    inputField:{
        borderBottomColor:"#330066",
        borderBottomWidth:1,
        width:"87%"
    },
    marginLeft:{
        marginLeft:15
    },
    searchIcon:{
        position:"absolute",
        right:"15%"
    }
})