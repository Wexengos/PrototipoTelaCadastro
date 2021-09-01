import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        backgroundColor: '#F44336' ,
        borderBottomWidth: 5,
        borderBottomColor: '#CACACA',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 1,
    },
    header2: {
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginTop: 15,
        width: 60,
        height: 60
    },
    headerText: {
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 12,
        fontSize: 20
    },
    leftIcon: {
        color: '#FFF',
        marginTop: 12,
        fontSize: 20,
        position: 'relative',
        left: '10%'
    },
    leftIconImage: {
        width: 25,
        height: 25
    }
});

export default styles;