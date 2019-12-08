/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createStackNavigator } from 'react-navigation-stack';
import Search from './src/app/components/search/search';
import Detail from './src/app/components/detail/detail';
import { createAppContainer } from 'react-navigation';

const navigator = createStackNavigator(
  {
    Search: { screen: Search },
    Detail: { screen: Detail },
  },
);

const App = createAppContainer(navigator);

export default App;
