import React from 'react'
import { View, Text, Image } from 'react-native'
import CategoriasHome from './categoriasHome'

export default class Home extends React.Component {

    render() {

        return (
            <View>
                <Text>Aqui fica a home</Text>

                <CategoriasHome></CategoriasHome>
            </View>
        )
    }
}