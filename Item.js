import React from "react";
import { View, Text } from 'react-native'

const Item = ({item, screenWidth}) => {

    return (
        <View style={{width:screenWidth-10, height:50, justifyContent:"center"}}>
            <Text style={{fontSize:16, left:5}}>{item}</Text>
        </View>
    )

}

export default Item;