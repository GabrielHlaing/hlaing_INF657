import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button(){
    const [msg, setMsg] = useState("");

    function handleClick(){
        if(msg == ""){
            setMsg("Hello! Welcome to React Native!");
        }else{
            setMsg("");
        }
    }

    return(
        <View>
            <TouchableOpacity onPress={handleClick} style={styles.button}> 
                Toggle Button
            </TouchableOpacity>
            <Text>{msg}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    },
});