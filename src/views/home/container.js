import React from 'react';
import styles from './style';
import Presenter from './presenter';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Presenter state={this.state} />;
  }
}
export default Container;
