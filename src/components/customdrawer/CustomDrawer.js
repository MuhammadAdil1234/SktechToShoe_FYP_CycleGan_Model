import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {widthPercentageToDP} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './Style';
const CustomDrawer = props => {
  const { state } = props;
  const currentRoute = state.routes[state.index];
  const { params } = currentRoute;
  const { userName, email } = params.params;
  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.topContainer}>
          <View style={styles.iconCircle}>
            <FontAwesome5
              name="user"
              size={widthPercentageToDP(9)}
              color="#503F46"
            />
          </View>
          <Text style={styles.nameText}>{userName}</Text>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome5
              name="envelope"
              size={widthPercentageToDP(4.7)}
              color="black"
              style={styles.emailIcon}
            />
            <Text style={styles.emailText}>{email}</Text>
          </View>
        </View>
        <View style={styles.centerContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => {props.navigation.navigate('Signin');}}>
          <View style={styles.textContainer}>
            <Ionicons
              name="exit-outline"
              size={widthPercentageToDP(7)}
              color={'#503F46'}
            />
            <Text style={styles.text}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
