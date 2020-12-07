import React from 'react';
import Navigation from './src/Config/navigation';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
