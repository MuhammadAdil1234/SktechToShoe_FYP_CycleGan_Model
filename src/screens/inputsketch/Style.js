import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: widthPercentageToDP(6)
  },
  topText: {
    bottom: heightPercentageToDP(3),
    fontSize: RFValue(28),
    color: '#503F46',
    fontWeight: 'bold',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#503F46',
    width: widthPercentageToDP(84),
    height: heightPercentageToDP(40),
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  buttonContainer: {
    top: heightPercentageToDP(3.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cencelButton: {
    right: widthPercentageToDP(5.9),
  },
  convertButton: {
    left: widthPercentageToDP(5.9),
  },
  bottomText:{
    top: heightPercentageToDP(18)
  },
  hint:{
    color: 'red',
    textAlign: 'center',
    fontSize: RFValue(14),
    fontWeight: 'bold'
  },
  loading:{
    fontWeight: 'bold',
    marginTop: heightPercentageToDP(1.5),
    color: '#503F46',
    fontSize: RFValue(14)
  }
});
export default styles;
