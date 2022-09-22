import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native"
import { Card } from '../../components/index';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 15,
        fontFamily: 'Lato-Regular',
    },
    input: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Lato-Bold',
        color: colors.greenSecundary,
        width: 60,
        marginVertical: 20,
        borderBottomColor: colors.greenSecundary,
        borderBottomWidth: 1,
        padding: 2,
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardContainer: {
        width: 300,
        maxWidth: '80%',
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 20,
        padding: 10,
    },
    label2: {
        fontSize: 15,
        fontFamily: 'Lato-Regular',
    },
    numberSelected:{
        fontSize: 30,
        fontFamily: 'Lato-Bold',
        color: colors.greenSecundary,
    },

})

const StartGame = ({ onHandleStartGame }) => {
    const [number, setNumber] = useState('');
    const [numberPicked, setNumberPicked] =  useState(false);
    const [numberSelected,  setNumberSelected] = useState(0);

    const onHandleChange = (text) => {
        setNumber(text.replace(/[^0-9]/g, ''));
    }
    const onHandlePick = () => {
        setNumberPicked(true);
        setNumberSelected(number)
    }
    const onHandleCancel = () => {
        setNumber('');
        setNumberPicked(false);
        setNumberSelected(0)
    }

    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.label}>Elije un numero</Text>
                <TextInput 
                    style={styles.input} 
                    maxLength={2} 
                    keyboardType="numeric" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    blurOnSubmit
                    value={number}
                    onChangeText={(text)=> onHandleChange(text)}
                />
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Limpiar"
                        onPress={onHandleCancel}
                        color={colors.greenSecundary}
                    />
                    <Button
                        title="Confirmar"
                        onPress={onHandlePick}
                        color={colors.greenSecundary}
                    />
                </View>
            </Card>
            {numberPicked && 
                <Card style={styles.cardContainer}>
                    <Text style={styles.label2}>Su numero elegido es</Text>
                    <Text style={styles.numberSelected}>{numberSelected}</Text>
                    <Button 
                        title="Iniciar juego"
                        onPress={()=> onHandleStartGame(numberSelected)}
                        color={colors.greenSecundary}
                    />
                </Card>
            }
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;
