import React from 'react';
import {View, Text, Image} from 'react-native';
import PlusButton from './plusButton';
import MinusButton from './MinusButton';
import styles from '../../Css';

const Card = ({book, onPress}) => {
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
        <PlusButton onPress={onPress} />
      </View>
    </View>
  );
};

export default Card;
