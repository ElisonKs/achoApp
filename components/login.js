import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default class Login extends React.Component {


    render() {

        return (
            <View style={styles.container}>
                <Image source={require('./../assets/images/logo_word.png')}></Image>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input}></TextInput>
                <Button
                    title="Entrar"
                    titleStyle={styles.buttonLabel}
                    buttonStyle={styles.buttonStyle}
                    containerStyle={styles.buttonContainerStyle} />
                <Text style={styles.forgot}>Deu um branco! Esqueci a senha!</Text>
                <Button
                  title="Login com o Google"
                  icon={<Image style={styles.buttonIcon} source={require('./../assets/images/icon-google.png')}></Image>}
                  titleStyle={styles.socialButtonLabel}
                  buttonStyle={styles.loginButton}
                  containerStyle={styles.buttonContainerStyle}
                  iconContainerStyle={styles.buttonIcon}
                />
                  <Button
                  title="Login com o Facebook"
                  icon={<Image style={styles.buttonIcon} source={require('./../assets/images/icon-facebook.png')}></Image>}
                  titleStyle={styles.socialButtonLabel}
                  buttonStyle={styles.loginButton}
                  containerStyle={styles.buttonContainerStyle}
                  iconContainerStyle={styles.buttonIcon}
                />
               


            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingRight: 15,
        paddingLeft: 15,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        color: "#FF5292",
        fontSize: 14,
        fontFamily: "Roboto",
        textAlign: "left",
        width: "100%",
        marginTop: 15

    },
    input: {
        borderBottomColor: "#330066",
        borderBottomWidth: 1,
        width: "100%"
    },
    buttonContainerStyle: {
        width: "100%",
        marginTop: 30
    },
    buttonStyle: {
        backgroundColor: "#330066",
        width: "100%",
        borderRadius: 30,
        height: 48
    },
    buttonLabel: {
        color: "#FAA98B",
        fontSize: 18
    },
    forgot: {
        color: "#FF5292",
        marginTop: 30,
        textDecorationLine: "underline"
    },
    loginButton:{
        width:"100%",
        height:48,
        borderColor:"#330066",
        borderWidth:1,
        borderRadius:30,
        marginTop:20,
        backgroundColor:"transparent"
    },
    socialButtonLabel:{
        color:"#330066"
    },
    buttonIcon:{
        marginRight:20,
    }
})