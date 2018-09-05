import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ maxLength, placeholder, label, value, onChangeText }) => {
   
   const{secureTextEntry, textInputStyles, containerStyle, labelStyle} = styles;
    return (
        <View style = {containerStyle}>
        <Text style = {labelStyle} >{label}</Text>
        <TextInput
        secureTextEntry= {secureTextEntry}
        maxLength = {maxLength}
        autoCorrect = {false}
        placeholder = {placeholder}
          style = {textInputStyles}
          value = {value}
          onChangeText = {onChangeText}></TextInput>
            </View>
    );
};

const styles = {
    textInputStyles :{
        color : '#000',
        fontSize : 18,
        paddingRight : 10,
        paddingLeft:20,
        LineHeight:23,
        flex : 2,
    },

    labelStyle : {
        fontSize : 18,
        paddingLeft : 20,
        flex : 1

    },

    containerStyle:{
        height:40,
        flex:1,
        paddingLeft : 20,
        flexDirection:'row',
        alignItems:'center'
    }


};
export {TextInput};