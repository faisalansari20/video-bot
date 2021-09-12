import React from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import VideoSteam from '../components/video-stream'
import Mic from '../components/mic'


const Main = () => {

  
 
  return (
    <View style={styles.main}>
      <VideoSteam/>
      <View style={styles.mic}>
        <Mic/>
      </View>
    </View>
  );
};

const styles=StyleSheet.create({
  main:{
    flex:1,
  },
  mic:{
    position:'absolute',
    bottom:20,
    width:'100%'
  },
  micIcon:{
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Main;
