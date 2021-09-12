import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, Image, View} from 'react-native';
import {getAudioPermission} from '../utilities/permission';
import {
  startListening,
  removeAllListener,
  destroylListening,
  onSpeechResult,
} from '../utilities/voice-recognition';

const Mic = () => {
  const listeningText = 'Listening...';
  const pressText = 'Press';

  const [text, setText] = useState(pressText);

  useEffect(async () => {
     startListening().then(isListening=>{
       console.log('isListening',isListening)
       isListening && onSpeechResult(onListenResult);
     })
     .catch(err=>{console.log('err::',err)})
    return () => {
      destroylListening().then(res=>{
        console.log('destroyed')
        removeAllListener();
      })
    };
  }, []);

  function onListenResult(results) {
    console.log('speech:', results);
  }

  function askForPermission() {
    getAudioPermission().then(isGranted => {
      if (isGranted) {
        console.log('granted');
      }
    });
  }

  function onPress() {
    text == pressText ? setText(listeningText) : setText(pressText);
    askForPermission();
  }
  return (
    <View style={styles.micIcon} onTouchEnd={onPress}>
      <Image source={require('../assets/mic/mic.png')} />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  micIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Mic;
