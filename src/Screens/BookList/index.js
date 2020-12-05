import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../Css';

export default (props) => {
    return (
        <View style={styles.container}>
            <Text onPress={() => props.navigation.navigate("cart")}>Book list</Text>
        </View >
    )
}