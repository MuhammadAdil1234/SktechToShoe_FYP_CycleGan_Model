import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
},
modalItemContainer: {
    height: heightPercentageToDP(30),
    backgroundColor: 'silver',
    justifyContent: 'space-around',
    borderTopLeftRadius: widthPercentageToDP(10),
    borderTopRightRadius: widthPercentageToDP(10),
    alignItems: 'center',
    borderWidth: 0,
    shadowColor: '#503F46',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  top:{
    width:widthPercentageToDP(14),
    height:heightPercentageToDP(0.8),
    borderRadius: widthPercentageToDP(2),
    borderWidth: 1,
    backgroundColor: '#503F46',
    top: heightPercentageToDP(0.7)
  },
  logoText:{
    fontSize: RFValue(26),
    fontWeight: 'bold',
    color: '#503F46',
  },
});
export default styles;
