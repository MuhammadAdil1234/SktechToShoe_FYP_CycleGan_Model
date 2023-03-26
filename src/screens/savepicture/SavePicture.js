import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {counterEvent} from 'react-native/Libraries/Performance/Systrace';
import CustomButton from '../../components/custom_button/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';
import { AppImages } from '../../globals/Images';
const SavePicture = () => {
  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      // this.bs.current.snapTo(1);
    });
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={{uri: image}} style={{width: 300,
      height: 300,}}/>
      <Text style={{fontSize: 40}}>Save Picture</Text>
      <TouchableOpacity
      onPress={choosePhotoFromLibrary}
        style={{
          backgroundColor: 'red',
          width: 200,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Choose from gallery</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SavePicture;
