/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './app/screen/home/HomePage';
import SubPage from './app/screen/customer/SubPage';

const App: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}
        />
        <Stack.Screen
          name="SubPage"
          component={SubPage}
          options={{ headerShown: true, cardStyle: { backgroundColor: 'white' } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
