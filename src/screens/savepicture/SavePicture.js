import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
const SavePicture = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>Save Picture</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          width: 200,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Choose from gallery</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SavePicture;
