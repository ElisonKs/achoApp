import React from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import gstyles from '../styles/global';



export default class WorkerRegister2 extends React.Component {





    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                        <Image source={require('./../assets/images/icon_alert.png')}></Image>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.labelNoService}>Você ainda não possui um serviço cadastrado.</Text>
                </View>
              
           
               
              
                <Button
                    title="Continuar"
                    titleStyle={gstyles.buttonLabel}
                    buttonStyle={gstyles.buttonStyle}
                    containerStyle={gstyles.buttonContainerStyle}
                    onPress={()=>navigate("workerRegister3")} />
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
    inlineInputs: {
        flexDirection: "row",
        justifyContent: 'space-evenly'
    },
    photoContainer: {
        paddingTop: 30,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-evenly"

    },
    photoButton: {
        backgroundColor: "transparent",
        borderColor: "#330066",
        borderWidth: 1,
        borderRadius: 15
    },
    photoButtonTitle: {
        color: "#330066"
    },
    imgContainer:{
        alignItems:"center",
        marginTop:40
    },
    txtContainer:{
        alignItems:"center"
    },
    labelNoService:{
        fontSize:20,
        color:"#330066",
        textAlign:"center",
        marginTop:20
    }
})