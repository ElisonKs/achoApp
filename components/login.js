import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import gstyles from '../styles/global';

export default class Login extends React.Component {

    constructor(props)
    {
        super(props)
    }


    render() {

        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image source={require('./../assets/images/logo_word.png')}></Image>
                <Text style={gstyles.label}>Email</Text>
                <TextInput style={gstyles.input}></TextInput>
                <Text style={gstyles.label}>Senha</Text>
                <TextInput style={gstyles.input}></TextInput>
                <Button
                    title="Entrar"
                    titleStyle={gstyles.buttonLabel}
                    buttonStyle={gstyles.buttonStyle}
                    containerStyle={gstyles.buttonContainerStyle} />
                <TouchableOpacity
                onPress={()=>navigate("RecoverPassword")}>
                   <Text style={styles.forgot}>Deu um branco! Esqueci a senha!</Text>
                </TouchableOpacity>
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