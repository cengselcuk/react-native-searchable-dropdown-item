import React, { useState, useEffect } from "react";
import Search from "./Search";
import Item from "./Item";
import {View,
        Text,
        Dimensions,
        TouchableOpacity,
        TouchableHighlight,
        Image,
        ScrollView} from 'react-native';

const screenWidth = Dimensions.get("window").width

const Dropdown = ({items, selectItem, scrollHeight, onSelect}) => {

    const [selectedText, setSelectedText] = useState("Select an item!")
    const [isDropdown, setIsDropdown] = useState(false)
    const [chevronRotation, setChevronRotation] = useState("90deg")
    const [searchedText, setSearchedText] = useState("")

    useEffect(() => { isDropdown ? (setChevronRotation("0deg"), setSearchedText("")) : setChevronRotation("90deg")}, [isDropdown])

    useEffect(() => { onSelect() }, [selectedText])
    
    const search = (key) => items[key].toUpperCase().includes(searchedText.toUpperCase())

    const filterLength = () => items.filter(item => item.toUpperCase().includes(searchedText.toUpperCase())).length


    return (

        <View style={{alignItems:"center"}}>

            <TouchableOpacity onPress={() => setIsDropdown(!isDropdown)}>
            <View style={{top:20, margin:25, width:screenWidth-10, height:50, flexDirection:"row", alignItems:"center",
                    backgroundColor:"white", justifyContent:"space-between", borderRadius:10, borderWidth:2, borderColor:"gray"}}>

                { isDropdown ?

                    <Search screenWidth={screenWidth} searchText={setSearchedText}/>

                :
                    
                    <Text style={{left:20, fontSize:18}}>{selectedText}</Text>

                }

                <TouchableOpacity onPress={() => setIsDropdown(!isDropdown)}>

                    <Image
                            source={require('./assets/chevron.jpg')}
                            style={{width:16, height:16, right:12, position:"absolute", bottom:-7, transform:[{rotate:chevronRotation}]}}
                    />

                </TouchableOpacity>

            </View>
            </TouchableOpacity>
            

            { isDropdown ?    

                <View style={{width:screenWidth-10, height: (scrollHeight!==undefined ? scrollHeight : 200) , borderRadius:10}}>
                <ScrollView style={{borderWidth:2, borderRadius:10, borderColor:"gray", backgroundColor:"white", flexGrow:0}}>

                    {
                        (filterLength() > 0) ?
                        
                            (items.map((item, index) => {
                                
                                return(

                                    (search(index))
                                    
                                    ?

                                        <TouchableHighlight style={{width:screenWidth-10, paddingHorizontal:10,paddingVertical:2}} key={index}
                                            underlayColor="lightgray"
                                            onPress={() => {
                                                setSelectedText(item)
                                                selectItem(item)
                                                setIsDropdown(!isDropdown)
                                            }}>
                                        <Item item={item} screenWidth={screenWidth}/>
                                        </TouchableHighlight>

                                    :

                                        null

                                )
                            }))

                        :

                            <Item item={"No Data Found!"} screenWidth={screenWidth}/>

                    }

                </ScrollView>
                </View>

            :

                null }

        </View>

    )

}

export default Dropdown;