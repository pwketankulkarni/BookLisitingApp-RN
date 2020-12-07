import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';
import styles from '../../Css';
import fetchBookData from '../../Config/booksdata';
import Card from '../../Components/Common/card';
import ACTIONTYPE from '../../Redux/Constants';

const BookList = ({books, setBooks}) => {
  const [isfetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    setIsFetching(true);
    fetchBookData.then((res) => setBooks(res)).catch((err) => setError(err));
    setIsFetching(false);
  }, []);

  return (
    <View style={styles.alignCenter}>
      {/* {isfetching ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={books}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id.toString()}
        />
      )} */}
      <FlatList
        data={books}
        renderItem={({item}) => (
          <Card book={item} onPress={() => alert('hi')} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const mapStateToProps = ({books}) => ({
  books,
});

const mapDispatchToProps = (dispatch) => ({
  setBooks: (data) => {
    dispatch({type: ACTIONTYPE.BOOKS_DATA, payload: data});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
