import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from  'react-native-vector-icons/FontAwesome';

import styles from './styles';

// ICONE
import logoufjf from '../../assets/logoufjf.png';
import leftArrow from '../../assets/leftArrow.png';

export default function Header({ onPress }){
    return(
        <View style={styles.header}>
            <TouchableOpacity style={styles.leftIcon} onPress={onPress}>
                <Image source={leftArrow} style={styles.leftIconImage}/>
            </TouchableOpacity>

            <View style={styles.header2}>
                <Image source={logoufjf} style={styles.logo}/>
                <Text style={styles.headerText}> CADASTRO DE EXTENSÃO </Text>
            </View>

            <Text></Text>
        </View>
    )
}