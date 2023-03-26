import React from 'react';
import {View, Text, Image} from 'react-native';
import CustomButton from '../../components/custom_button/CustomButton';
import {AppImages} from '../../globals/Images';
import {AppStrings} from '../../globals/Strings';
import styles from '../inputsketch/Style';
const InputSketch = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.topText}>{AppStrings.logoName}</Text>
      <View style={styles.imageContainer}>
        <Image source={AppImages.imageOne} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.cencelButton}>
          <CustomButton text="Cencel" width="34" />
        </View>
        <View style={styles.convertButton}>
          <CustomButton text="Save" width="34" />
        </View>
      </View>
    </View>
  );
};
export default InputSketch;
