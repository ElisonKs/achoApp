import React from 'react'
import {View,Text,Image,FlatList} from 'react-native'

export default class CategoriasHome extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {categoryList : null}
    }

    render(){

        return(
            <View>
                <Text>Aqui ficam as categorias</Text>
                <FlatList
                ref={
                    (c) => {
                      this.flatList = c;
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={this.categoryList}
                >

                </FlatList>
            </View>
        )
    }
}