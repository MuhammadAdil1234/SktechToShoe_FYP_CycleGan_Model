import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainPage from '../screens/main/main';
import SavePicture from '../screens/savepicture/SavePicture';
import CustomDrawer from '../components/customdrawer/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Help from '../screens/help/Help';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const Drawer = createDrawerNavigator();
const Drawers = ({route, navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false,
        drawerLabelStyle: {marginLeft: widthPercentageToDP(-5.7), fontSize: RFValue(14)},
        drawerActiveBackgroundColor: '#503F46',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
      }}>
      <Drawer.Screen
        name="Home"
        component={MainPage}
        initialParams={{params: route.params}}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={widthPercentageToDP(6)} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Saved Picture"
        component={SavePicture}
        initialParams={{params: route.params}}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="images" size={widthPercentageToDP(6)} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Guide"
        component={Help}
        initialParams={{params: route.params}}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons
              name="information-circle-outline"
              size={widthPercentageToDP(6.7)}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default Drawers;
