import 'react-native-gesture-handler';
import React from 'react'
import Navigation from './Navigation'
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App