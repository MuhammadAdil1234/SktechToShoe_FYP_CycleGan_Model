import React from 'react';
import {View, Text, Image} from 'react-native';
import CustomButton from '../../components/custom_button/CustomButton';
import {AppStrings} from '../../globals/Strings';
import styles from '../inputsketch/Style';

const InputSketch = ({route, navigation}) => {
  const {images} = route.params;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.topText}>{AppStrings.logoName}</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: images}} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.cencelButton}>
          <CustomButton text="Cencel" width="34" navigation={navigation}/>
          
        </View>
        <View style={styles.convertButton}>
          <CustomButton
            text="Convert"
            width="34"
            navigation={navigation}
            images={images}
          />
        </View>

      </View>
        <View style={styles.bottomText}>
          <Text>
            <Text style={styles.hint}>hint</Text>: Click 'Convert' for
            Sketch-to-Real image
          </Text>
        </View>
    </View>
  );
};

export default InputSketch;
