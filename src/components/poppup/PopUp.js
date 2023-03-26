import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';
import styles from './Style';
import CustomButton from '../custom_button/CustomButton';
import {AppStrings} from '../../globals/Strings';
// import {AppStrings} from '../../globals/Strings';
const Popup = props => {
  const [popUp, isPopUp] = useState(props.hiden1);

  return (
    <Modal animationType="slide" transparent={true} visible={popUp}>
      <View style={styles.modal}>
        <View style={styles.modalItemContainer}>
          <View style={styles.top}></View>
          <Text style={styles.logoText}>{AppStrings.selectImage}</Text>
          <CustomButton text="From Gallery" width="80" />
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
