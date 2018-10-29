/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import {Icon} from 'react-native-elements'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();

    this.state = {};

    this.takePicture = this.takePicture.bind(this);
    this.pickPicture = this.pickPicture.bind(this);
  }

  render() {
    let {image} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={{width: '100%'}} contentContainerStyle={styles.container}>
          <Text style={styles.welcome}>Jimmy - Mariage</Text>

          <View style={{alignItems: 'center', padding: 10}}>
            <Button onPress={this.takePicture} title="Prendre une photo"/>
            <Text style={{padding: 20}}>ou</Text>
            <Button onPress={this.pickPicture} title="Sélectionner dans la galerie"/>
          </View>

          {image && (
            <View style={{width: '100%', padding: 20, alignItems: 'flex-start'}}>
              <Image
                style={{width: '100%', height: '100%', padding: 0}}
                source={{uri: image.path}}
                resizeMode="contain"
              />

              <View style={{position: 'absolute', top: 0, right: 5, justifyContent: 'flex-end'}}>
                <Icon
                  reverse
                  name='ios-close'
                  type='ionicon'
                  onPress={() => this.setState({image: null})}
                  color='#517fa4'
                />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }

  takePicture() {
    ImagePicker.openCamera({}).then(image => {
      this.setState({image})
    }, err => {
    });
  }

  pickPicture() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(image => {
      console.log(image);

      this.setState({image})
    });
    //   ImagePicker.openCamera({ }).then(image => {}, err => {});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
