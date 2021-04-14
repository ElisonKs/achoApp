import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

export default class CategoriasHome extends React.Component {

    constructor(props) {
        super(props)
        this.state = { categoriesList: null }
    }

    render() {

        return (
            <View>
                <Text style={styles.title}>Categorias</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={this.state.categoriesList}

                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => console.log("aqui")}

                            >
                                <View style={styles.categoryItem}>
                                    <View style={styles.categorieCircle}>
                                    <Image style={styles.imgCategory} source={require('./../assets/images/logo_single.png')}></Image>
                                    </View>
                                    <View style={styles.titleContainer}>
                                        <Text sytle={styles.categoryTitle}>
                                            {item.acho_descricao_cat}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

    async componentDidMount() {
        return fetch('http://www.achoapp.com.br/administrador/json/categoria_json/retornar_categorias_principais/08787a804e2a4f7ba145a553e4eab7cb',
            {
                headers: new Headers({
                    dismiss: ""
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    categoriesList: responseJson.categorias,
                    isLoading: false
                })



            })
            .catch((error) => {
                console.log(error);
            }
            )

    }
}

const styles = StyleSheet.create({
    title: {
        color: "#FF5292",
        fontSize: 18,
        marginBottom:5

    },
    categorieCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: "#330066",
        borderWidth: 1,
        alignItems:"center",
        paddingTop:7
    },
    categoryItem: {
    },
    titleContainer:{
    width:100
    },
    categoryTitle: {
        maxWidth:5
    },
    imgCategory:{
        width:30,
        height:30
    }
})