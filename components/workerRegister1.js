import React from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import gstyles from '../styles/global';



export default class WorkerRegister1 extends React.Component {





    render() {


        return (
            <View style={styles.container}>
                <Text style={gstyles.label}>Nome</Text>
                <TextInput style={gstyles.input}></TextInput>
                <View style={styles.inlineInputs}>  
                    <View>
                        <Text style={gstyles.label}>Data de nascimento</Text>
                        <TextInput style={gstyles.input}></TextInput>
                    </View>
                    <View>
                        <Text style={gstyles.label}>CPF</Text>
                        <TextInput style={gstyles.input}></TextInput>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingTop: 20,
        paddingHorizontal: 15
    },
    inlineInputs:{
        flexDirection:"row",
      justifyContent:'space-evenly'  
    }
})