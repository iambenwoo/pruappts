import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import HomeHeaderBar from './HomeHeaderBar';
import HomeContent from './HomeContent';
import HomeBottomMenu from './HomeBottomMenu';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, NavigationState } from '@react-navigation/native'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
  },
});

type ParameterList = {
  HomePage: undefined;
  SubPage: undefined;
}

type SubPageNavigationProps = NavigationProp<ParameterList, "SubPage", NavigationState>;

const HomePage: React.FC = () => {
  const navigation = useNavigation<SubPageNavigationProps>();

  return (
    <View style={styles.page}>
      <HomeHeaderBar />
      <HomeContent navigation={navigation} />
      <HomeBottomMenu />
    </View>
  );
};

export default HomePage;
