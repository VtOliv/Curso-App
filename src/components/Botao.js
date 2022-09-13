import React from 'react';
import { Text , View, StyleSheet , Button } from 'react-native'

function Botao(props) {

 return (
    <View>
        <Button style={styles.container} title='cadastrar' onPress={() => cadastrar(props.nome)}/>

    </View>
 )
}

function cadastrar(nome) {
    console.warn(`cadastrou ${nome}`)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#aff'
    }
})

export default Botao