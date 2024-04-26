/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './js/App';
import { name as appName } from './app.json';
import AsyncStorageDemoPage from './js/AsyncStorageDemoPage';
import FetchDemoPage from './js/FetchDemoPage';
import HiNetTestPage from './js/HiNetTestPage';
import LoginPage from './js/page/LoginPage';
import AppNavigators from './js/navigator/AppNavigators';

AppRegistry.registerComponent(appName, () => App);
