import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: widthPercentageToDP(4),
    backgroundColor: '#ffffff',
    paddingTop: heightPercentageToDP(7)
  },
  logo: {
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(25 ),
    marginBottom: heightPercentageToDP(1.7)
  },
  title: {
    fontSize: RFValue(22),
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP(3),
    textAlign: 'center',
    color: '#503F46',
  },
  description: {
    fontSize: RFValue(14),
    marginBottom: heightPercentageToDP(1.4),
    textAlign: 'center',
    color: '#666666',
  },
  stepContainer: {
    alignItems: 'flex-start',
  },
  stepNumber: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: '#503F46',
  },
  stepText: {
    fontSize: RFValue(14),
    color: '#666666',
    marginBottom: heightPercentageToDP(1.2),
  },
  button: {
    marginTop: heightPercentageToDP(3),
    paddingVertical: heightPercentageToDP(1.8),
    paddingHorizontal: widthPercentageToDP(10),
    backgroundColor: '#503F46',
    borderRadius: widthPercentageToDP(2)
  },
  buttonText: {
    color: '#ffffff',
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
});
export default styles;
