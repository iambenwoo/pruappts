import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import HomeTitle from './HomeTile';
import { NavigationProp, NavigationState } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
});

type ParameterList = {
  HomePage: undefined;
  SubPage: undefined;
}

type SubPageNavigationProps = NavigationProp<ParameterList, "SubPage", NavigationState>;

interface Props {
  navigation: SubPageNavigationProps;
}

class HomeContent extends React.Component<Props> {
  render(): JSX.Element {
    const myPrudentialHandler = (): void => {
      console.log('myPrudential');
      this.props.navigation.navigate('SubPage');
    };

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <HomeTitle title="myPrudential" callback={myPrudentialHandler} />
        <HomeTitle title="Second banner" />
        <HomeTitle title="Third banner" />
        <HomeTitle title="Fourth banner" />
        <HomeTitle title="Fitih banner" />
        <HomeTitle title="Sixth banner" />
      </ScrollView>
    );
  }
}

export default HomeContent;
