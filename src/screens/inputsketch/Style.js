import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: widthPercentageToDP(6)
    },
    topText:{
        bottom: heightPercentageToDP(3),
        fontSize: RFValue(28),
        color: '#503F46',
        fontWeight: 'bold'
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: '#503F46'

    },
    image:{
        width:widthPercentageToDP(75),
        height: heightPercentageToDP(40),
    },
    buttonContainer:{
        top: heightPercentageToDP(3),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cencelButton:{
        right: widthPercentageToDP(5.2)
    },
    convertButton:{
        left: widthPercentageToDP(5.2)
    }
});
export default styles;
