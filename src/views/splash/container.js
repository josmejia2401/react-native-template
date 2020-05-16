import React from 'react';
import styles from './style';
import SplashScreen from './presenter';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <SplashScreen state={this.state} />;
  }
}
export default Container;
