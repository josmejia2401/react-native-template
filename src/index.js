import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import withProvider from '../redux/withProvider';
import Home from './views/home'

class AppView extends React.Component {
  /*
  componentWillMount() {
    super.componentWillMount();
    //this._loadData();
    this._goHome();
  }
*/

  _loadData = async () => {
    const { currentUser } = this.props;
    setTimeout(() => {
      this.props.navigation.navigate(
        currentUser && currentUser.username ? 'AppTab' : 'Auth'
      );
    }, 1000);
  };

  _goHome = async () => {
    this.props.navigation.navigate('AppTab');
  };


  render() {
    return (
      <View style={styles.container}>{<Home />}</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default withProvider(AppView);
