import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../Css';
import Card from '../../Components/Common/card';
import Shape from '../../Components/Common/badge';
import ACTIONTYPE from '../../Redux/Constants';

const Cart = ({cartItems, removeFromCart, count}) => {
  return (
    <View style={styles.alignCenter}>
      {cartItems.length ? (
        <>
          <View style={styles.cartCount}>
            <Shape
              count={count}
              type="rectangle"
              style={{alignSelf: 'flex-start'}}
            />
            <Text style={[styles.boldText, {marginLeft: 10}]}>Added</Text>
          </View>
          <FlatList
            data={cartItems}
            renderItem={({item}) => (
              <Card
                book={item}
                onPress={() => removeFromCart(item.id)}
                forCart={true}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      ) : (
        <Text>Cart is empty</Text>
      )}
    </View>
  );
};

const mapStateToProps = ({books, cart}) => ({
  cartItems: Object.keys(cart.data).map((item) => books[item]),
  count: cart.count,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (payload) =>
    dispatch({type: ACTIONTYPE.REMOVE_FROM_CART, payload}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
