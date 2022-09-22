import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Card } from '../../components/index';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    cardContainer: {
        width: 300,
        height: 150,
        maxWidth: '80%',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        marginVertical: 15,
        fontSize: 30,
        fontFamily: 'Lato-Bold',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

const GameStarted = ({ numberSelected, onHandleStartGame }) => {
    return(
        <View style={styles.container}>
            <Card style={styles.cardContainer}>
                <Text style={styles.label}>La suposicion del oponente</Text>
                <Text style={styles.number}>{numberSelected}</Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title='Menor'
                        onPress={() => null}
                        color={colors.greenSecundary}
                    />
                    <Button 
                        title='Mayor'
                        onPress={() => null}
                        color={colors.greenSecundary}
                    />
                </View>
            </Card>

            <Button 
                title='Cancelar'
                onPress={() => onHandleStartGame(0)}
                color='#588157'
            />
        </View>
    )
}

export default GameStarted;