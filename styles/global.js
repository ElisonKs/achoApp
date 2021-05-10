import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    buttonDisabledStyle: {
        backgroundColor: "#C4C4C4",
        width: "100%",
        borderRadius: 30,
        height: 48
    },
    buttonDisabledLabel: {
        color: "#FFFFFF",
        fontSize: 18
    },
});