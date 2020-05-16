import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  { AssetExample } from '../../../components/index';
import { Card } from 'react-native-paper';
import styles from './style';

const Presenter = props => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>
      Change code in the editor and watch it change on your phone! Save to get a
      shareable url.
    </Text>
    <Card>
      <AssetExample />
    </Card>
  </View>
);

export default Presenter;