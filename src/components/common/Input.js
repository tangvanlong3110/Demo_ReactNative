import React from 'react'
import {Text, View, TextInput} from 'react-native'

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) =>{
    const { inputStyles, labelStyles, containerStyles } = styles;
    return(
         <View style = {containerStyles}>
          <Text style={labelStyles}>{label}</Text>
          <TextInput 
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    style = {inputStyles}
                    value = {value}
                    onChangeText = { onChangeText }
                    style= {{height: 40, width:200}}/>
                    
         </View>
    );
}

const styles ={ 
    inputStyles:{
        color: "#0000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight:23,
        flex: 4
    },

    labelStyles:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 3
    },

    containerStyles:{
       height: 40,
       width: 300,
       flexDirection: 'row',
       alignItems: 'center'
    }
}


export default Input;
