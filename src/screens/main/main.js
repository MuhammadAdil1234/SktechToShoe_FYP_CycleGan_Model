import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../components/custom_button/CustomButton';
import Popup from '../../components/poppup/PopUp';
import {AppImages} from '../../globals/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styles from './Style';
import Card from '../../components/card/Cards';
import { AppStrings } from '../../globals/Strings';
const MainPage = (props) => {
  const [popUp, isPopUp] = useState(false);
  const [images, setimages] = useState([
    AppImages.imageOne,
    AppImages.imageTwo,
    AppImages.imageThree,
  ]);
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Welcome, Adil</Text>
        <Ionicons
          name="happy-outline"
          size={widthPercentageToDP(6)}
          color={'#503F46'}
        />
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({item, index}) => (
          <TouchableOpacity>
            <Image source={item} key={index} style={styles.image} />
          </TouchableOpacity>
        )}
      />
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Ionicons
            name="camera-outline"
            size={widthPercentageToDP(9)}
            color={'#503F46'}
          />
          <Text style={styles.text}>{AppStrings.takeImage}</Text>
        </View>
        <View style={styles.circle}>
          <Ionicons
            name="image-outline"
            size={widthPercentageToDP(9)}
            color={'#503F46'}
          />
          <Text style={styles.text}>{AppStrings.saveImage}</Text>
        </View>
        <View style={styles.circle}>
          <Ionicons
            name="help-circle-outline"
            size={widthPercentageToDP(9)}
            color={'#503F46'}
          />
          <Text style={styles.text}>{AppStrings.guide}</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <Card text={'Sketch'} icon={'images-outline'} hiden={isPopUp}/>
        <Card text={'Files'} icon={'folder-outline'} hiden={isPopUp} navigation={props.navigation}/>
      </View>
      <View style={styles.bottomContainer}>
      <Ionicons
            name="shield-checkmark-outline"
            size={widthPercentageToDP(9)}
            color={'#503F46'}
          />
        <Text style={styles.bottomText}>{AppStrings.infoText}</Text>
      </View>
      <View>
        <Text style={styles.logoText}>{AppStrings.logoName}</Text>
      </View>
      {popUp ? <Popup hiden1={popUp} hiden2={isPopUp} navigation={props.navigation}/> : null}
    </ScrollView>
  );
};
export default MainPage;
