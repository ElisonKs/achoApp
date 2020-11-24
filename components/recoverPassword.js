import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, Modal, Alert, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import gstyles from '../styles/global';

export default class RecoverPassword extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View >
                        <View style={styles.modalView}>
                            <View style={styles.closeModal}>
                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                                onPress={() => {
                                    this.setState({ modalVisible: false })
                                }}>
                                <Image source={require('./../assets/images/close_modal.png')}></Image>
                            </TouchableOpacity>
                            </View>
                            <View style={styles.centeredView}>
                                <Image source={require('./../assets/images/mail_sent.png')}></Image>
                                <Text style={[styles.dontWorryText, styles.firstText]}>Enviamos um email para</Text>
                                <Text style={styles.dontWorryText}>que você possa redefinir</Text>
                                <Text style={[styles.dontWorryText, styles.lastText]}>sua senha.</Text>
                            </View>
                           
                        </View>
                    </View>
                </Modal>
                <Image source={require('./../assets/images/logo_word.png')}></Image>
                <Text style={[styles.dontWorryText, styles.firstText]}>Não se precoupe!</Text>
                <Text style={styles.dontWorryText}>Digite seu endereço de email</Text>
                <Text style={[styles.dontWorryText, styles.lastText]}>abaixo para redefinir sua senha.</Text>
                <Text style={gstyles.label}>Email</Text>
                <TextInput style={gstyles.input}></TextInput>
                <Button
                    title="Enviar"
                    titleStyle={gstyles.buttonLabel}
                    buttonStyle={gstyles.buttonStyle}
                    containerStyle={gstyles.buttonContainerStyle}
                    onPress={() => this.setState({ modalVisible: true })} />
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
    dontWorryText: {
        fontSize: 20,
        color: "#330066",
        fontFamily: "Roboto"
    },
    lastText: {
        marginBottom: 30
    },
    firstText: {
        marginTop: 30
    },
    closeModal: {
        alignItems: 'flex-end'
    },
    modalView:{
        backgroundColor:"#ffffff",
        padding:20
    },
    centeredView:{
        alignItems:"center"
    }

})