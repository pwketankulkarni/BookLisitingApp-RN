import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../Css';

const Badge = ({ count, style }) => (
    <View style={[styles.badgeContainer, style]}>
        <Text style={styles.badgeText}>{count}</Text>
    </View>
)

const mapStateToProps = ({ cart: { count } }) => ({
    count
})
export default connect(mapStateToProps)(Badge)