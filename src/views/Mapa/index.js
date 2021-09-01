import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, LogBox} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
import { MapView } from 'react-native-maps';

import styles from '../styles';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import Map from '../../components/Map';
import { rgba } from 'jimp';

LogBox.ignoreAllLogs();

export default function Home({ navigation }){

    const [visible, setVisible]=useState(false);

    function New(){
        navigation.navigate('Home5');
    }
    function Old(){
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
            <Header onPress={Old}/>
            
            <View style={{height: '80.5%', width: '100%', top: '10%'}}>    
                <Map/>
            </View>
            
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0)', marginTop: '30%', height: '73.25%', position: 'absolute'}}>
                <GooglePlacesAutocomplete
                    placeholder='Digite a localização do evento'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data);
                    }}
                    textInputProps={{
                        InputComp: Input,
                        leftIcon: { type: 'font-awesome', name: 'map-marker', color: '#F44336' },
                        errorStyle: { color: 'red' },
                    }}
                    query={{
                        key: 'AIzaSyDkf71ZywyRmJGj6JcAWbe1SCGcq7SICVc',
                        language: 'pt',
                    }}
                />
                </View>
            
            <Footer icon={'null'} />
        </View>

    )
}

/*
<View style={{height: '70%', width: '100%'}}>    
<GooglePlacesAutocomplete
    placeholder='Selecione a localização do evento'
    onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setVisible(true);
    }}
    textInputProps={{
        InputComp: Input,
        leftIcon: { type: 'font-awesome', name: 'map-marker', color: '#F44336' },
        errorStyle: { color: 'red' },
      }}
    query={{
        key: 'AIzaSyDkf71ZywyRmJGj6JcAWbe1SCGcq7SICVc',
        language: 'pt',
    }}
/>
</View>

<Modal isVisible={visible}/>
*/