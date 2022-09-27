import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import If from '../If'

function Resultado(props) {
    const styles = StyleSheet.create({
        box: {
            backgroundColor: 'lightgray'
        }
    })

    return (
        <View style={styles.box}>
            <If test={props.nome && props.email && props.cpf && props.telefone && props.dtnasc}>
                <Text>Nome: {props.nome}</Text>
                <Text>Email: {props.email}</Text>
                <Text>CPF: {props.cpf}</Text>
                <Text>Telefone: {props.telefone}</Text>
                <Text>Data de Nascimento: {props.dtnasc}</Text>
            </If>
            <If test={!props.nome || !props.email || !props.cpf || !props.telefone || !props.dtnasc}>
                <Text>Preencha o formulário para ver os dados</Text>
            </If>
        </View>
    )
}

export default Resultado