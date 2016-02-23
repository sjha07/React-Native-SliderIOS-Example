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


class SliderC1 extends Component {
  constructor(props) {
    super(props);   
    this.state = {
        value: 0,
      };
  }  

  render() {
    return (
      <View style={{ marginTop: 20}}>
        <Text style={styles.text} >
          {this.state.value}
        </Text>
        <SliderIOS
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
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

module.exports = SliderC1;

exports.title = '<SliderIOS>';
exports.displayName = 'SliderExample';
exports.description = 'Slider input for numeric values';
exports.examples = [
  {
    title: 'Default settings',
    render(): ReactElement {
      return <SliderIOSEx />;
    }
  },
  {
    title: 'minimumValue: -1, maximumValue: 2',
    render(): ReactElement {
      return (
        <SliderIOSEx
          minimumValue={-1}
          maximumValue={2}/>
      );
    }
  },
  {
    title: 'step: 0.25',
    render(): ReactElement {
      return <SliderIOSEx step={0.25} />;
    }
  },
  {
    title: 'Custom min/max track tint color',
    render(): ReactElement {
      return (
        <SliderIOSEx
          minimumTrackTintColor={'red'}
          maximumTrackTintColor={'green'} />
      );
    }
  },
  {
    title: 'Custom thumb image',
    render(): ReactElement {
      return <SliderIOSEx thumbImage={require('./uie_thumb_big.png')} />;
    }
  },
  {
    title: 'Custom track image',
    render(): ReactElement {
      return <SliderIOSEx trackImage={require('./slider.png')} />;
    }
  },
  {
    title: 'Custom min/max track image',
    render(): ReactElement {
      return (
        <SliderIOSEx
          minimumTrackImage={require('./slider-left.png')}
          maximumTrackImage={require('./slider-right.png')} />
      );
    }
  },
];
