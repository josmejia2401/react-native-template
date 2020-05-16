import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store.jsx';


const withProvider = (Component) => class StoreProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <Component {...this.props} />
      </Provider>
    );
  }
}

export default withProvider;
