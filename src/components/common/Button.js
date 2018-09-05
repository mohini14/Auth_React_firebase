import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Button  = ({onPress, children}) =>{
    return(
        <TouchableOpacity onPress = {onPress} style = {styles.buttonStyle}>
        <Text style = {styles.buttonTextStyle}>{children}</Text>
        </TouchableOpacity>
    );
} ;

const styles = {
    buttonStyle : {
        flex:1,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
        alignSelf : 'stretch'
    },

    buttonTextStyle:{
        alignSelf : 'center',
        color:'#007aff',
        fontSize:15,
        fontWeight:'600',
        paddingBottom:10,
        paddingTop:10


    }
};

export {Button} ;