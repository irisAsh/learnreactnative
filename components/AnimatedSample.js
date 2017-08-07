import React, { Component } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class AnimatedSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0),
      displacement: 0,
    };
  }

  goUp() {
    let displacement = this.state.displacement - 50
    Animated.timing(this.state.animatedValue, {
      toValue: displacement,
      duration: 200
    }).start();
    this.setState({
      displacement: displacement,
    })
  }

  goDown() {
    let displacement = this.state.displacement + 50
    Animated.timing(this.state.animatedValue, {
      toValue: displacement,
      duration: 200
    }).start();
    this.setState({
      displacement: displacement,
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, {transform: [{translateY: this.state.animatedValue}]}]}
        >
          <View style={styles.upBox}>
            <TouchableOpacity onPress={this.goUp.bind(this)}>
              <Text>Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.downBox}>
            <TouchableOpacity onPress={this.goDown.bind(this)}>
              <Text>Down</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    alignItems: 'stretch',
  },
  upBox: {
    flex: 1,
    backgroundColor: '#87ceeb',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  downBox: {
    flex: 1,
    backgroundColor: '#f08080',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
}
