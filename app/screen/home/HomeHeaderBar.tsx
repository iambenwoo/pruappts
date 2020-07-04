import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logo from '../../assets/pulse-logo.png';
import GlobalStyles from '../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    borderBottomColor: GlobalStyles.COLOR.$grey,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
});

const HomeHeaderBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
};


export default HomeHeaderBar;
