import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const ANIMATION_SCENE_NAME = 'STATE_SCENE';

export default class AnimationScreen extends Component {

  static navigationOptions = {
    title: 'Animation',
  };

  render() {
    return (
        <Text>animation</Text>
    );
  }
}