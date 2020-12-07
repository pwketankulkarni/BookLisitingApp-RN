import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import BookList from '../Screens/BookList'
import Cart from '../Screens/Cart/index';

const BookStack = createStackNavigator();
export default () => (
    <NavigationContainer>
        <BookStack.Navigator headerMode="none">
            <BookStack.Screen name="booklist" component={BookList} />
            <BookStack.Screen name="cart" component={Cart} />
        </BookStack.Navigator>
    </NavigationContainer>
);


