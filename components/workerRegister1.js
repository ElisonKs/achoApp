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
                    <View style={{width:"45%"}}>
                        <Text style={gstyles.label}>Data de nascimento</Text>
                        <TextInput style={gstyles.input}></TextInput>
                    </View>
                    <View style={{width:"45%"}}>
                        <Text style={gstyles.label}>CPF</Text>
                        <TextInput style={gstyles.input}></TextInput>
                    </View>
                </View>
                <View style={styles.inlineInputs}>  
                    <View style={{width:"30%"}}>
                        <Text style={gstyles.label}>CEP</Text>
                        <TextInput style={gstyles.input}></TextInput>
                    </View>
                    <View style={{width:"60%"}}>
                        <Text style={gstyles.label}>Cidade</Text>
                        <TextInput style={gstyles.input}></TextInput>
                    </View>
                </View>
                <View style={styles.inlineInputs}>  
                    <View style={{width:"70%"}}>
                        <Text style={gstyles.label}>Endereço</Text>
                        <TextInput style={gstyles.input}></TextInput>
                    </View>
                    <View style={{width:"20%"}}>
                        <Text style={gstyles.label}>Nº</Text>
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