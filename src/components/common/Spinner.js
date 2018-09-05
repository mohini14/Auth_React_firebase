import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = ({size}) => {
    return(
        <View style = {styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
      spinnerStyle : {
        //   height : 40,
        //   width : 40
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
};


export {Spinner};