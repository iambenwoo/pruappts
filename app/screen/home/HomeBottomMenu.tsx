import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../constants/GlobalStyles'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: GlobalStyles.COLOR.$grey,
    bottom: 0,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-evenly',
    position: 'absolute',
    width: '100%',
  },
});

const HomeBottomMenu: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Tab1</Text>
      </View>
      <View>
        <Text>Tab2</Text>
      </View>
      <View>
        <Text>Tab3</Text>
      </View>
    </View>
  );
};


export default HomeBottomMenu;
