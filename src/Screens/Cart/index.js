import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../Css';
import Card from '../../Components/Common/card';
import ACTIONTYPE from '../../Redux/Constants';

const Cart = ({ cartItems }) => {
    return (
        <View style={styles.alignCenter}>
            {
                cartItems.length ? <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                        <Card book={item} onPress={() => alert("hi")} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                /> : <Text>Cart is empty</Text>
            }

        </View>
    )
}

const mapStateToProps = ({ books, cart }) => ({
    cartItems: Object.keys(cart).map(item => books[item])
})

export default connect(mapStateToProps)(Cart)