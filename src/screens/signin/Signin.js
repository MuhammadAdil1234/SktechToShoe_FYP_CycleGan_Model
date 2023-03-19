import React, {useEffect, useState} from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import CustomButton from '../../components/custom_button/CustomButton';
import CustomInputBox from '../../components/custom_input/custom_input_box';
import {AppStrings} from '../../globals/Strings';
import styles from './Styles';
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  var [person, setPerson] = useState({});
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.heyThere}>{AppStrings.heyThere}</Text>
          <Text style={styles.welcomeBack}>{AppStrings.welcomeBack}</Text>
        </View>
        <View>
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
            <CustomButton text="Sign In" width="60"/>
          </View>
        </View>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          {AppStrings.doHaveAccount}{' '}
          <Text
            style={styles.loginText}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            {AppStrings.signUp}
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default Signin;
