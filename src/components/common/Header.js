import React, { Component } from 'react'
import { Text, View } from "react-native"

const Header = (props)=>{
    const {textStyles, viewStyles} = Styles
    
     return (
      <View style={viewStyles}>
          <Text style={textStyles}>{props.headerText}</Text>
      </View>
     );
}

const Styles = {
    textStyles: {
        fontSize: 20
    },
    viewStyles: {
        height: 60,
        paddingTop: 13,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        elevation: 2,
        position: "relative"
    }
}

export default Header


