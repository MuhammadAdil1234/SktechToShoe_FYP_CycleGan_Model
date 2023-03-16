import React from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import CustomButton from '../../components/custom_button/CustomButton';
import {AppImages} from '../../globals/Images';
import {AppStrings} from '../../globals/Strings';
import styles from './Style';
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={AppImages.logoImage} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text={AppStrings.getStarted} width="80" />
      </View>
    </View>
  );
};
export default Home;
