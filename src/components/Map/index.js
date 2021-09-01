import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MapView from 'react-native-maps';
import styles from './styles';

export default class Map extends Component {
    render() {
        return (
            <MapView
                initialRegion={{
                    latitude: -21.773794,
                    longitude: -43.368926,
                    latitudeDelta: 0.0042,
                    longitudeDelta: 0.0031,
                }}
                style={styles.mapView}
            />
        );
    }
}