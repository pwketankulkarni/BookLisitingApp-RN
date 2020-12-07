import React from 'react';
import { View, StyleSheet } from 'react-native';

export default (props) => (
    <View style={[{ ...styles.cross }]}>
        <View style={styles.crossFlat} />
    </View>
)

const styles = StyleSheet.create({
    cross: {
    },
    crossUp: {
        backgroundColor: '#000',
        color: "red",
        height: 20,
        width: 5
    },
    crossFlat: {
        backgroundColor: '#000',
        height: 5,
        width: 20,
        position: 'absolute',
        bottom: 7

    }
}

)

