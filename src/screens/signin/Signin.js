import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../components/custom_button/CustomButton';
import CustomInputBox from '../../components/custom_input/custom_input_box';
import {AppStrings} from '../../globals/Strings';
import styles from './Styles';
const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.heyThere}>{AppStrings.heyThere}</Text>
          <Text style={styles.welcomeBack}>{AppStrings.welcomeBack}</Text>
        </View>
        <View>
          <CustomInputBox
            icon={'account'}
            value={userName}
            label={AppStrings.userName}
            onChangeText={setUserName}
          />
          {userName ? (
            <View style={styles.hintText}>
              <Text>
                <Text style={styles.hint}>{AppStrings.hint}</Text>
                {AppStrings.userNameHint}
              </Text>
            </View>
          ) : null}
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
          {password ? (
            <View style={styles.hintText}>
              <Text>
                <Text style={styles.hint}>{AppStrings.hint}</Text>
                {AppStrings.passwordHint}
              </Text>
            </View>
          ) : null}
          <View style={styles.buttonContainer}>
            <CustomButton
              text="Sign In"
              width="60"
              navigation={navigation}
              email={email}
              password={password}
              userName={userName}
              setCheck={setCheck}
            />
          </View>
          {check ? (
            <View>
              <Text style={styles.correctInfo}>
                {' '}
                {AppStrings.enterCorretInfo}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          {AppStrings.signInGuest}{' '}
          <Text
            style={styles.loginText}
            onPress={() => {
              navigation.navigate('Drawers', {
                userName: 'Guest01',
                email: 'guest01@gmail.com',
              });
            }}>
            {AppStrings.guest}
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default Signin;
