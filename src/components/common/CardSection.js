import React from "react"
import { View } from "react-native"

const CardSection = (props) =>{
    return(
    <View style={styles.containerStyles}>
        {props.children}
    </View>
    );
}
const styles= {
    containerStyles: {
       borderBottomWidth: 1,
       padding: 5,
       backgroundColor: "#fff",
       flexDirection: "row",
       justifyContent: "flex-start",
       borderColor: "#ddd",
       position: "relative"
    }
}

export default CardSection