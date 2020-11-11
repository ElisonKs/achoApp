import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Swiper from "react-native-swiper";


export default class Onboarding extends React.Component{

    state = { week: 0, birthDateText: "",dateLabelHidden:true ,
    dateHidden:true,weekHidden:true}

    render(){


        return(
            <View style={styles.container}>
            <Swiper style={styles.activeDot}
                showsButtons={true}
                loop={false}
                nextButton={<Text style={styles.buttonText}>Próximo</Text>}
                prevButton={<Text style={styles.buttonText}>Anterior</Text>}
                dotColor='#FFFFFF'
                buttonWrapperStyle={{
                    backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute',
                    top: '45%', left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10,
                    justifyContent: 'space-between', alignItems: 'center'
                }}
            >
                <View style={[styles.slideContainer]}>
                    <Text style={[styles.blankText, styles.titleText]}>Achô</Text>
                    <Text style={[styles.blankText]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>
                <View style={[styles.slideContainer]}>
                    <Text style={[styles.blankText, styles.titleText]}>Achô</Text>
                    <Text style={[styles.blankText]}>A Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </View>
                <View style={[styles.slideContainer]}>
                    <Text style={[styles.blankText, styles.titleText]}>Está quase?</Text>
                    <TouchableOpacity
                     onPress={()=>{this.setState({weekHidden:false,dateHidden:true,dateLabelHidden:true})}}>
                    <Text style={[styles.blankText, styles.subtitleText]}>Escolhe a semana da tua gravidez.</Text>
                    </TouchableOpacity>
                    
                    <Text style={[styles.blankText, styles.titleText]}>Já nasceu?</Text>
                    <TouchableOpacity
                     onPress={()=>{this.setState({weekHidden:true,dateHidden:false})}}>
                    <Text style={[styles.blankText, styles.subtitleText]}>Indique a data de nascimento.</Text>
                    </TouchableOpacity>
                    <Text style={[styles.dateLabel,this.state.dateLabelHidden?styles.hide:""]}>{this.state.birthDateText}</Text>
                  
                      

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
    titleText: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    subtitleText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 200,
        height: 55,
        borderRadius: 8,
        padding: 10
    }
    ,
    activeDot: {
        color: '#FAA98B'
    },
    picker: {
        height: 50,
        width: '50%',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        textAlign: 'center'


    },
    dateLabel:{
        height: 50,
        width: '50%',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize:16,
        marginTop:8
    },
    transparentBack: {
        backgroundColor: 'transparent',
        fontSize: 18,
        textAlign: 'center'

    },
    buttonEntrar: {
        backgroundColor: '#FFFFFF',
        marginTop: 8,


    },
    buttonText: {
        color: '#FFFFFF',
        alignContent: 'flex-end'
    },
    hide: {
        display: 'none'
    },


});