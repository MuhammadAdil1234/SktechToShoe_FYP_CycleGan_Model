import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import CustomButton from '../../components/custom_button/CustomButton';
import {AppImages} from '../../globals/Images';
import {AppStrings} from '../../globals/Strings';
import styles from '../inputsketch/Style';
import axios from 'axios';

const InputSketch = ({route, navigation}) => {
  const [realImage, setRealImage] = useState(null);
  const {images} = route.params;
  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );

  useEffect(() => {
    const formData = new FormData();
    formData.append('sketch', {
      uri: images,
      type: 'image/jpeg',
      name: 'sketch.jpg',
    });

    axios({
      method: 'post',
      url: 'http://192.168.10.8:5000/predict',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'},
    })
      .then(response => {
        setRealImage(response.data.image);
        console.log(response.data.image)
      })
      .catch(error => {
        console.error(error);
      });
  }, [images]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.topText}>{AppStrings.logoName}</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: `data:image/jpeg;base64,${realImage}`}} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.cencelButton}>
          <CustomButton text="Exit" width="34" />
        </View>
        <View style={styles.convertButton}>
          <CustomButton text="Convert" width="34" navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default InputSketch;
