import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import SubPageHeaderBar from './SubPageHeaderBar';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
  },
});

const SubPage: React.FC = () => {
  return (
    <View style={styles.page}>
      <SubPageHeaderBar />
    </View>
  );
};

export default SubPage;
