import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5', 
  },
  imageContainer: {
    marginTop: heightPercentageToDP(4),
  },
  image: {
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(45),
  },
  buttonContainer: {
    marginBottom: heightPercentageToDP(8),
  },
});
export default styles;
