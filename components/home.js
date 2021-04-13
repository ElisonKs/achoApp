import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import CategoriasHome from './categoriasHome'

export default class Home extends React.Component {

    render() {

        return (
            <View style={styles.container}>

                <CategoriasHome></CategoriasHome>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin:15
    }
})