import React from 'react';
import {
    View, 
    Image, 
    Text, 
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default function Footer({ icon, navegar, /*onPress2,*/ infoCadastro }){
    
    function Next(){
        //console.log(infoCadastro),
        navegar;
    }

    return(

        <View style={styles.containerAbs}>
            
            <TouchableOpacity style={styles.button} onPress={navegar}>
                <Text style={styles.text}>CONTINUAR</Text>
                <Icon name={icon == 'null' ? null : 'arrow-right' } size={40} color={'#FFF'}/>
            </TouchableOpacity>

        </View>
    )
}

/*  */