/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';
import Video from 'react-native-video';


let { width, height } = Dimensions.get('window');
export default class App extends Component<{}> {


    render() {

        return (

            // Within your render function, assuming you have a file called 
// "background.mp4" in your expansion file. Just add your main and (if applicable) patch version 
            //source={{ uri: "http://7xp9qs.com1.z0.glb.clouddn.com/butler2.0.mp4 "}}
            //{ uri: "http://192.168.137.1:8080/video/test.avi "}
            //require('../assets/video/turntable.mp4')}


            <Video source={{ uri: "http://7xp9qs.com1.z0.glb.clouddn.com/butler2.0.mp4 "}}
                   ref={(ref) => {
                       this.player = ref
                   }}
                   rate={1.0}
                   volume={1.0}
                   muted={false}
                   paused={false}
                   resizeMode="cover"
                   repeat={true}
                   playInBackground={false}
                   playWhenInactive={false}
                   progressUpdateInterval={250.0}
                   style={[{height: width*0.5},{width: height*0.25}, this.props.style]}
            />


        );

    }
}

// Later on in your styles.. 
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
