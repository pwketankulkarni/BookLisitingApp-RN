import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../../Css';

const Card = ({book, onPress, forCart = false}) => {
  console.log('forCart', forCart);
  return (
    <View style={styles.cardStyle}>
      <View style={styles.row}>
        <View style={styles.padding10}>
          <Image source={{uri: book.imgUrl}} style={styles.restImage} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title} numberOfLines={1}>
            {book.name}
          </Text>
          <Text style={styles.address} numberOfLines={4}>
            {book.author}
          </Text>
        </View>
      </View>
      <View style={styles.rightBottomButton}>
        <TouchableOpacity onPress={onPress}>
          {forCart ? (
            <Icon color="#0000FF" name="minus-square" size={30} />
          ) : (
            <Icon color="#0000FF" name="plus-square" size={30} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
