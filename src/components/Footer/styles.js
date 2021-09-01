import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: '#F44336',
        position: 'relative',
        bottom: 0,
        borderTopWidth: 5,
        borderTopColor: '#CACACA',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    containerAbs: {
        width: '100%',
        height: 70,
        backgroundColor: '#F44336',
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 5,
        borderTopColor: '#CACACA',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        position: 'relative',
        top: 12.5,
        left: '60%',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    image: {
        width: 40,
        height: 40,
        right: 5,
    },
    text: {
        position: 'relative',
        color: '#FFF',
        right: 5,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 5.775
    }

});

export default styles;