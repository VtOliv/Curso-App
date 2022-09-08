import React from 'react';
import { Text , StyleSheet } from 'react-native'

function Estilos() {
    const style = StyleSheet.create({
        App: {
            color : '#ccc',
            backgroundColor: '#f43f24' 
        }
    })

    return <Text style={style.App}>Teste</Text>
}

export default Estilos