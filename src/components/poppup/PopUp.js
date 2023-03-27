import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';
import styles from './Style';
import CustomButton from '../custom_button/CustomButton';
import {AppStrings} from '../../globals/Strings';
// import {AppStrings} from '../../globals/Strings';
import ImagePicker from 'react-native-image-crop-picker';
const Popup = props => {
  const [popUp, isPopUp] = useState(props.hiden1);
  
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      // setImage(image.path);
      // this.bs.current.snapTo(1);
      props.navigation.navigate('InputSketch', {images: image.path});
    });
  };
  return (
    <Modal animationType="slide" transparent={true} visible={popUp}>
      <View style={styles.modal}>
        <View style={styles.modalItemContainer}>
          <View style={styles.top}></View>
          <Text style={styles.logoText}>{AppStrings.selectImage}</Text>
          <CustomButton
            text="From Gallery"
            width="80"
            choosePhotoFromLibrary={choosePhotoFromLibrary}
          />
          <CustomButton
            text="Cencel"
            width="80"
            hidenn={isPopUp}
            hidennn={props.hiden2}
          />
        </View>
      </View>
    </Modal>
  );
};
export default Popup;
