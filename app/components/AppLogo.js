import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function AppLogo({ font_size }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.first, { fontSize: font_size }]}>Supa</Text>
            <Text style={[styles.last, { fontSize: font_size }]}>Menu</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    first: {
        color: colors.BLACK,
        fontWeight: 'bold'
    },
    last: {
        color: colors.PRIMARY,
        fontWeight: 'bold'
    }
});

export default AppLogo;