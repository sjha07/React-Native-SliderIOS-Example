/**
 * Developer - Satish Jha
 * Slider IOS example
 */
 'use strict';

import React, {
  SliderIOS,
  Text,
  StyleSheet,
  View,
  AppRegistry,
  Component
} from 'react-native';

var SliderC1 = require('./SliderC1');

class SliderIOSEx extends Component {
  constructor(props) {
    super(props);   
    this.state = {
        value: 0,
      };
  }

  render() {
    return (
      <View>
        <SliderC1 />

        <SliderC1
            minimumValue={-1}
            maximumValue={2}/>

        <SliderC1 step={0.25} />

        <SliderC1
          minimumTrackTintColor={'red'}
          maximumTrackTintColor={'green'} />



      </View>
    );
  }
}

var styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

AppRegistry.registerComponent('SliderIOSEx', () => SliderIOSEx);


