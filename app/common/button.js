import React from 'react';
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native';


const Button = (props) => {
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    button:{
        height: 45,
        borderRadius: 5,
        marginHorizontal: 25,
        marginVertical: 10,
        backgroundColor: 'rgb(42, 55, 68)',
        justifyContent: 'center',
        flex: 1
    },
    text:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    }
});
export { Button };