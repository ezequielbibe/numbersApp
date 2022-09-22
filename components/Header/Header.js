import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        paddingVertical: 40,
        backgroundColor: colors.greenPrimary,
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 23,
        color: '#FFF',
    }
})

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Adivina el numero</Text>
        </View>
    )
}

export default Header;