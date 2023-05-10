import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {AppStrings} from '../../globals/Strings';
import styles from './Style';
const CustomButton = props => {
  const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+@gmail\.com$/;
  return (
    <TouchableOpacity
      style={[styles.button, {width: widthPercentageToDP(props.width)}]}
      onPress={() => {
        {
          props.text == 'Picture'
            ? props.hiden(true)
            : props.text == 'Cencel'
            ? [props.hidenn(false), props.hidennn(false)]
            : props.text == AppStrings.getStarted
            ? props.navigation.navigate('Signin')
            : props.text == 'Sign In'
            ? [
                usernameRegex.test(props.userName) &&
                (emailRegex.test(props.email) || props.email.endsWith('@gmail.com')) &&
                props.password.length >= 8
                  ? props.navigation.navigate('Drawers')
                  : props.setCheck(true),
              ]
            : props.text == 'From Gallery'
            ? props.choosePhotoFromLibrary()
            : props.text == 'Convert'
            ? props.navigation.navigate('OutputReal')
            : null;
        }
      }}>
      <Text style={styles.labelStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
