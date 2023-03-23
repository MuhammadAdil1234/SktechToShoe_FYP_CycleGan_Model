import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#f5f5f5'},
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#503F46',
    paddingVertical: heightPercentageToDP(3.3),
  },
  iconCircle:{
    width:widthPercentageToDP(20),
    height:widthPercentageToDP(20),
    borderRadius: widthPercentageToDP(10),
    borderWidth:2,
    borderColor: '#503F46',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    color: '#503F46',
    fontSize: RFValue(22),
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emailText: {
    color: 'black',
    fontFamily: 'Roboto-Regular',
    marginLeft: widthPercentageToDP(1.5),
    fontSize: RFValue(14),
  },
  emailIcon: {marginTop: heightPercentageToDP(0.3)},
  centerContainer: {flex: 1, paddingTop: heightPercentageToDP(1)},
  bottomContainer: {padding: widthPercentageToDP(6), borderTopWidth: 1, borderTopColor: '#ccc'},
  textContainer: {flexDirection: 'row', alignItems: 'center'},
  text: {
    fontSize: RFValue(16),
    fontFamily: 'Roboto-Medium',
    marginLeft: widthPercentageToDP(1.5),
    color: '#503F46',
    fontWeight: 'bold',
  },
});
export default styles;
