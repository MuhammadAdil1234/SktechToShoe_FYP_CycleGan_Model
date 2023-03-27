import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {AppStrings} from '../../globals/Strings';
import styles from './Style';
const CustomButton = props => {
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
            ? props.navigation.navigate('Signup')
            : props.text == 'Sign Up'
            ? props.navigation.navigate('Signin')
            : props.text == 'Sign In'
            ? props.navigation.navigate('Drawers')
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
