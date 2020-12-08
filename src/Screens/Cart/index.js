import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../Css';
import Card from '../../Components/Common/card';
import Badge from '../../Components/Common/badge';
import ACTIONTYPE from '../../Redux/Constants';

const Cart = ({cartItems, removeFromCart}) => {
  return (
    <View style={styles.alignCenter}>
      {cartItems.length ? (
        <>
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
          {/* <Badge count={ }/> */}
        </>
      ) : (
        <Text>Cart is empty</Text>
      )}
    </View>
  );
};

const mapStateToProps = ({books, cart}) => ({
  cartItems: Object.keys(cart.data).map((item) => books[item]),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (payload) =>
    dispatch({type: ACTIONTYPE.REMOVE_FROM_CART, payload}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
