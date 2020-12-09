import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../Css';

const Shape = ({count, style, type}) => (
  <View
    style={[
      type == 'circle' ? styles.badgeContainer : styles.rectangleContainer,
      style,
    ]}>
    <Text style={styles.badgeText}>{count}</Text>
  </View>
);

const mapStateToProps = ({cart: {count}}) => ({
  count,
});
export default connect(mapStateToProps)(Shape);
