/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView from 'react-native-maps';

const Region = {
  LONDON: {
    latitude: 51.507222,
    longitude: -0.1275,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  },
  SAN_FRANSISCO: {
    latitude: 37.783333,
    longitude: -122.416667,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  },
};

class OverlapExample extends Component {

  state = {
    visibleMap: 0,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.buttons]}>
          <TouchableOpacity
            style={[styles.button, styles.button1]}
            onPress={() => this.setState({ visibleMap: 0 })}
          >
            <Text style={styles.buttonText}>Show Map One</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.button2]}
            onPress={() => this.setState({ visibleMap: 1 })}
          >
            <Text style={styles.buttonText}>Show Map Two</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={[styles.map, this.state.visibleMap === 0 && styles.focused]}
            initialRegion={Region.LONDON}
          />
          <MapView
            style={[styles.map, this.state.visibleMap === 1 && styles.focused]}
            initialRegion={Region.SAN_FRANSISCO}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    flex: 1,
    height: 75,
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#D32F2F',
  },
  button2: {
    backgroundColor: '#512DA8',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
  },
  focused: {
    opacity: 1,
  },
});

AppRegistry.registerComponent('example2', () => OverlapExample);
