import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Popup from '../../components/poppup/PopUp';
const Card = props => {
  const [popUp, isPopUp] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        {
            props.text == 'Sketch'
              ? props.hiden(true)
              : props.text == 'Files'
              ? props.navigation.navigate('SavePicture')
              : null;
          //   props.name == 'Booking'
          //     ? props.navigation.navigate('BookingPage') : null;
          //   props.name == 'Orders'
          //     ? props.navigation.navigate('Confirmbooking') : null;
        }
      }}>
      <View style={styles.cardOne}>
        <View style={styles.icon}>
        <Ionicons
          name={props.icon}
          size={widthPercentageToDP(12)}
          color={'#503F46'}
        />
        </View>
        <Text style={styles.bookText}>{props.text}</Text>
      </View>
      {popUp ? <Popup hiden1={isPopUp} /> : null}
    </TouchableOpacity>
  );
};
export default Card;
