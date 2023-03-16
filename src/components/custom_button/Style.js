import { StyleSheet } from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    button: {
    //   flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: heightPercentageToDP(7.5),
      backgroundColor: '#503F46',
      borderRadius: widthPercentageToDP(8),
    },
    labelStyle: {
      color: '#FFFFFF',
      fontSize: RFValue(16),
      fontWeight: 'bold'
    },
  });
  export default styles;