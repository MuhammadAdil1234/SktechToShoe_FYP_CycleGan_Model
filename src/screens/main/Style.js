import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: widthPercentageToDP(4),
    marginVertical: heightPercentageToDP(5),
    // flex: 1,
    // paddingHorizontal: widthPercentageToDP(4),
    // paddingVertical: heightPercentageToDP(3.5),
    // marginBottom: heightPercentageToDP(2),
    // backgroundColor: '#f5f5f5', 
    // justifyContent: 'space-between'
  },
  topContainer:{
    flexDirection: 'row',
    marginBottom: heightPercentageToDP(1.7)
  },
  topText:{
    fontSize: RFValue(18),
    color: '#503F46',
    fontWeight:'bold',
    marginRight: widthPercentageToDP(1.3)

  },
  image: {
    height: heightPercentageToDP(27),
    width: widthPercentageToDP(96),
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: heightPercentageToDP(3.6),
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: RFValue(12),
    color: '#503F46',
  },
  cardContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: heightPercentageToDP(3.6)
  },
  bottomContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP(4)
  },
  bottomText:{
    fontSize: RFValue(14),
    marginLeft: widthPercentageToDP(1),
    color: '#503F46',
  },
  logoText:{
    fontSize: RFValue(22),
    textAlign: 'center',
    fontWeight:'bold',
    color: '#503F46',
    marginTop: heightPercentageToDP(4)
  }
});
export default styles;
