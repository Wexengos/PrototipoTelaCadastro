import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MapView } from 'react-native-maps';

import styles from '../styles';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Map from '../../components/Map';

export default function Home({ navigation }){

    function Old(){
        navigation.navigate('Home4');
    }

    return(
        <View style={styles.container}>
            <Header onPress={Old}/>
            <ScrollView style={{width: '100%', marginVertical: 10}}>
                <View style={styles.card}>
                    <Text style={styles.label}>Evento Cadastrado com Sucesso!</Text>
                </View>
            </ScrollView>
            <Footer icon={'null'} />
        </View>
    ) 
}

/* export default class Home5 extends Component {
    render({ navigation }) {
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
} */