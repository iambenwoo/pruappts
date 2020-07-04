import React from 'react';
import { View, StyleSheet } from 'react-native';

import GlobalStyles from '../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    borderBottomColor: GlobalStyles.COLOR.$grey,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
});

const SubPageHeaderBar: React.FC = () => {
  return <View style={styles.container} />;
};

export default SubPageHeaderBar;
