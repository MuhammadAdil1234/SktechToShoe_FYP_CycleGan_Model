import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  cardOne: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: widthPercentageToDP(43),
    height: heightPercentageToDP(25),
    borderTopRightRadius: widthPercentageToDP(8),
    borderTopLeftRadius: widthPercentageToDP(8),
    borderBottomLeftRadius: widthPercentageToDP(10),
    // borderBottomRightRadius: 20,
    borderWidth: 0,
    shadowColor: '#503F46',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 6,
  },
  icon:{
    top: heightPercentageToDP(4)
  },
  bookText:{
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#503F46',
    marginBottom: heightPercentageToDP(1)
  }
});
export default styles;
