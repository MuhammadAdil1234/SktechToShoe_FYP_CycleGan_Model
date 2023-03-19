import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: heightPercentageToDP(3.5),
    justifyContent: 'space-between'
  },
  textContainer:{
    alignItems: 'center',
    marginTop: heightPercentageToDP(5),
    marginBottom: heightPercentageToDP(2)
  },
  heyThere:{
    fontSize: RFValue(16),
    color: '#7B6F72'
  },
  welcomeBack:{
    fontSize: RFValue(26),
    fontWeight:"bold",
    color: '#503F46'
  },
  buttonContainer:{
    alignSelf: 'center',
    marginTop: heightPercentageToDP(2.1)
  },
  bottomTextContainer:{
    alignItems: 'center'
  },
  bottomText:{
    fontSize: RFValue(14),
    fontWeight:"bold",
  },
  loginText:{
    fontSize: RFValue(14),
    fontWeight:"bold",
    color: '#503F46'
  }
});
export default styles;