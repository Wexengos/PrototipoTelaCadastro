import React, {useState} from 'react';
import { View, Text, Button, Modal, StyleSheet} from 'react-native';

export default function(isVisible){

    const [visible, setVisible]=useState(isVisible)

    return(
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={styles.modal}>
                    <Text>Gigi é irado</Text>
                    <Text>Quem não sabe, nada sabe.</Text>
                    <Button
                        title="Fechar" 
                        onPress={() => {setVisible(false)} }
                    />
                </View> 
            </Modal>
            <Button
                title="Visualizar no Mapa"
                color="green"
                onPress={()=>(setVisible(true))}
            />

        </View>
    )
}

const styles=StyleSheet.create({
    modal: {
        backgroundColor: "#FFF",
        margin: 20,
        padding: 20,
        borderRadius: 20,
        elevation: 10,
        marginTop: 150,
    }
})