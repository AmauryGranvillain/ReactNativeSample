import React, { Component } from 'react';
import { View, Text, Image, Animated , Easing} from 'react-native';

export const ANIMATION_SCENE_NAME = 'STATE_SCENE';

export default class AnimationScreen extends Component {

  static navigationOptions = {
    title: 'Animation',
  };

  constructor(props) {
    super(props)

    this.moveAnimation = new Animated.ValueXY({ x: 10, y: 10 })

    this.moveDown = this.moveDown.bind(this);
    this.moveUp = this.moveUp.bind(this);
  }

  componentDidMount(){
      this.moveDown();
  }

  moveDown(){
    Animated.timing(this.moveAnimation, {
        toValue: {x: 10, y: 300},
        duration: 2000,
        easing: Easing.bounce,
    }).start(() => this.moveUp())
  }
  moveUp(){
    Animated.timing(this.moveAnimation, {
        toValue: {x: 10, y: 10},
        duration: 2000,
        easing: Easing.bounce ,    
    }).start(() => this.moveDown())
  }

  render() {
    return (
        <Animated.View style={this.moveAnimation.getLayout()}>
            <Image
                style={{width: 100, height: 100}}
                source={{uri: 'https://img.ohmymag.com/article/humour/mr-bean-s-incruste-dans-avatar_8d73c59406e9ab1833b2cb3cb403bf93ee3dfe26.jpg'}} ></Image>
        </Animated.View>
    );
  }
}