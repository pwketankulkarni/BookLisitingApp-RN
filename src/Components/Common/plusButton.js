import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default (props) => (
    <TouchableOpacity style={[{ ...styles.cross }]} onPress={props.onPress}>
        <View style={styles.crossUp} />
        <View style={styles.crossFlat} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    bgColor: {
        zIndex: -1,
        height: 60,
        width: 60,
        backgroundColor: "#000",
        color: "#000"
    },
    cross: {
        zIndex: 5
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
        left: -8,
        top: 8,

    }
}

)

