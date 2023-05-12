import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AppImages} from '../../globals/Images';
import styles from './Style';
import {AppStrings} from '../../globals/Strings';
const Help = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={AppImages.logoImage} style={styles.logo} />
      <Text style={styles.title}>Welcome to the Shoe Image Converter App!</Text>
      <Text style={styles.description}>
        This app allows you to convert sketch images of shoes into real shoe
        images.
      </Text>
      <Text style={styles.description}>
        Simply follow these steps to get started:
      </Text>
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>
          <Text style={styles.stepNumber}>1</Text>. Sign in or use the app as a
          guest.
        </Text>

        <Text style={styles.stepText}>
          <Text style={styles.stepNumber}>2</Text>. Choose an image from your
          gallery.
        </Text>

        <Text style={styles.stepText}>
          <Text style={styles.stepNumber}>3</Text>. Preview the selected image.
        </Text>

        <Text style={styles.stepText}>
          <Text style={styles.stepNumber}>4</Text>. Convert the image into a
          real shoe image.
        </Text>
        <Text style={styles.stepText}>
          <Text style={styles.stepNumber}>5</Text>. Save the converted image to
          the main page.
        </Text>
        <Text style={styles.stepText}>
          <Text style={styles.stepNumber}>6</Text>. Click 'Get Started' to make
          Account!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.buttonText}>{AppStrings.getStarted}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Help;
