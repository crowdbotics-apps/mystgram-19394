import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile87816Navigator from '../features/UserProfile87816/navigator';
import Settings87815Navigator from '../features/Settings87815/navigator';
import Settings87813Navigator from '../features/Settings87813/navigator';
import SignIn287811Navigator from '../features/SignIn287811/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile87816: { screen: UserProfile87816Navigator },
Settings87815: { screen: Settings87815Navigator },
Settings87813: { screen: Settings87813Navigator },
SignIn287811: { screen: SignIn287811Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
