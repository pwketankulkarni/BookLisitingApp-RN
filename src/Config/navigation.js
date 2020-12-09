import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//screens
import BookList from '../Screens/BookList';
import Cart from '../Screens/Cart/index';
import Shape from '../Components/Common/badge';

import styles from '../Css';

const BookStack = createStackNavigator();
const Navigation = () => (
  <NavigationContainer>
    <BookStack.Navigator>
      <BookStack.Screen
        name="booklist"
        component={BookList}
        options={({navigation}) => ({
          title: 'Book Shop',
          headerRight: () => (
            <View style={styles.headerRight}>
              <Shape style={{marginRight: 10}} type="circle" />
              <TouchableOpacity onPress={() => navigation.navigate('cart')}>
                <Icon name="shopping-cart" size={30} color="#0000FF" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <BookStack.Screen name="cart" component={Cart} />
    </BookStack.Navigator>
  </NavigationContainer>
);

export default Navigation;
