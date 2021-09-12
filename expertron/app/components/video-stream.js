import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Video from 'react-native-video';

const VideoStream = () => {

  function onBuffer(bf){
    console.log('bf',bf)
  }
  function videoError(bf){
    console.log('bf',bf)
  }
  return (
       <Video 
      // source={{uri: "https://media.istockphoto.com/videos/beautiful-funny-cat-touching-the-lens-of-cameratoo-cute-video-id908860256"}}   // Can be a URL or a local file.
      // source={{uri: "https://cdn.videvo.net/videvo_files/video/free/2021-08/large_watermarked/210804_01_Dog%20Walk_4k_002_preview.mp4"}}   // Can be a URL or a local file.
      source={{uri: "https://cdn.videvo.net/videvo_files/video/premium/video0231/large_watermarked/01_part_72_cowboy_dog_preview.mp4"}}   // Can be a URL or a local file.
 onBuffer={onBuffer}                // Callback when remote video is buffering
 onError={videoError}               // Callback when video cannot be loaded
 style={{ flex:1}}
 muted={true}
 repeat={true}
 resizeMode={"stretch"}
 volume={1.0}
 rate={1.0}
 ignoreSilentSwitch={"obey"}
 repeat={true}
 /> 
  );
};

export default VideoStream;
