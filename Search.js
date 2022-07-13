import React from "react";
import { View, Image, TextInput } from 'react-native';

const Search = ({searchText, screenWidth}) => {

    return(
        
        <View style={{width:screenWidth-10}}>
                <Image 
                        source={require('./assets/search.jpg')}
                        style={{width:23, height:23, left:8, top:13, position:"absolute"}}
                />

                <TextInput style={{width:screenWidth-85, left:40, height:50}}
                        placeholder="search an item.."
                        onChangeText={(text) => searchText(text)}>
                </TextInput>
        </View>

    )

}

export default Search;