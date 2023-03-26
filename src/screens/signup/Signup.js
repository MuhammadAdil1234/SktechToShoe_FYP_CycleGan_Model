import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../components/custom_button/CustomButton';
import CustomInputBox from '../../components/custom_input/custom_input_box';
import {AppStrings} from '../../globals/Strings';
import styles from './Styles';
const Signup = ({navigation}) => {
  var [email, setEmail] = useState('');
  var [lastName, setLastName] = useState('');
  var [password, setPassword] = useState('');
  var [firstName, setFirstName] = useState('');
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.heyThere}>{AppStrings.heyThere}</Text>
          <Text style={styles.createAnAccount}>
            {AppStrings.createAnAccount}
          </Text>
        </View>
        <View>
          <CustomInputBox
            icon={'account'}
            value={firstName}
            label={AppStrings.fistName}
            onChangeText={setFirstName}
          />
          <CustomInputBox
            icon={'account'}
            value={lastName}
            label={AppStrings.lastName}
            onChangeText={setLastName}
          />
          <CustomInputBox
            icon={'email-outline'}
            value={email}
            label={AppStrings.email}
            onChangeText={setEmail}
          />
          <CustomInputBox
            icon={'key-chain-variant'}
            value={password}
            isHiddenField={true}
            label={AppStrings.password}
            onChangeText={setPassword}
          />
          <View style={styles.buttonContainer}>
            <CustomButton
              text="Sign Up"
              width="60"
              navigation={navigation}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          {AppStrings.doHaveAccount}{' '}
          <Text
            style={styles.loginText}
            onPress={() => {
              navigation.navigate('Signin');
            }}>
            {AppStrings.signIn}
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default Signup;
