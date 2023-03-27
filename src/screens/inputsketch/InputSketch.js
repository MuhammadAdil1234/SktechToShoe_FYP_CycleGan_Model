import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import CustomButton from '../../components/custom_button/CustomButton';
import {AppImages} from '../../globals/Images';
import {AppStrings} from '../../globals/Strings';
import styles from '../inputsketch/Style';
const InputSketch = ({route, navigation}) => {
  const {images} = route.params;
  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );
  useEffect(() => {
    setImage(images);
  }, [images]);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.topText}>{AppStrings.logoName}</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.cencelButton}>
          <CustomButton text="Exit" width="34" />
        </View>
        <View style={styles.convertButton}>
          <CustomButton text="Convert" width="34" navigation={navigation}/>
        </View>
      </View>
    </View>
  );
};
export default InputSketch;
