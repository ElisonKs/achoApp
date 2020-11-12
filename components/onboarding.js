import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Swiper from "react-native-swiper";
import { Button } from "react-native-elements"


export default class Onboarding extends React.Component {

    state = {
        week: 0, birthDateText: "", dateLabelHidden: true,
        dateHidden: true, weekHidden: true
    }

    render() {


        return (
            <View style={styles.container}>
                <Swiper style={styles.activeDot}
                    loop={false}

                    dotColor='#FFFFFF'
                    activeDotColor="#FAA98B"
                    activeDotStyle={{ width: 20 }}
                    buttonWrapperStyle={{
                        backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute',
                        top: '45%', left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10,
                        justifyContent: 'space-between', alignItems: 'center'
                    }}
                >
                    <View style={[styles.slideContainer]}>
                    <Image source={require('./../assets/images/logo_single.png')}></Image>
                        <Text style={[styles.blankText]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                    </View>
                    <View style={[styles.slideContainer]}>
                    <Image source={require('./../assets/images/logo_single.png')}></Image>
                        <Text style={[styles.blankText]}>A Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    </View>
                    <View style={[styles.slideContainer]}>
                    <Image source={require('./../assets/images/logo_word.png')}></Image>
                        <View style={styles.buttons}>
                            <Button
                                title="Cadastrar como Prestador"
                                buttonStyle={styles.buttonOnboarding}
                                titleStyle={styles.buttonOnboardingText}
                                containerStyle={{ textAlign: "center" }}
                            />
                            <Button
                                title="Cadastrar como Contratante"
                                buttonStyle={styles.buttonOnboarding}
                                titleStyle={styles.buttonOnboardingText}
                                containerStyle={{ textAlign: "center" }}
                            />


                        </View>
                        <View style={styles.buttons}>
                            <Text style={styles.blankText}>
                                <Text>
                                    Já sou cadastrado.
                                </Text>
                                <Text style={styles.pinkText}>
                                     Fazer Login.
                                 </Text>
                            </Text>
                            <Text style={styles.blankText}>Cadastrar mais tarde.</Text>
                        </View>


                    </View>

                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#330066"

    },
    blankText: {
        color: '#FFFFFF',
        textAlign: 'center',
        maxWidth: '75%',
        fontSize: 16
    },
    pinkText:{
     color: "#FAA98B"
    },
    titleText: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    activeDot: {
        color: '#FAA98B'
    },
    dateLabel: {
        height: 50,
        width: '50%',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 8
    },
    buttons: {
        flex: 0.3,
        justifyContent: "space-around",
        paddingBottom: 10
    },
    buttonOnboarding: {
        borderColor: "#FAA98B",
        borderWidth: 1,
        backgroundColor: "transparent",
        borderRadius: 30,
    },
    buttonOnboardingText: {
        color: "#FAA98B",
        fontSize: 18,
        width: "85%"
    }


});