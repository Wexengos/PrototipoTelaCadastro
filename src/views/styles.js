import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF'
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center'
    },
    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EE6B26'
    },
    filterTextInative: {
        color: '#20295f',
        fontWeight: 'bold',
        fontSize: 18,
        opacity: 0.5
    },
    content: {
        width: '100%',
        marginTop: 30,
    },
    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#20295f',
        alignItems: 'center'
    },
    titleText: {
        color: '#20295f',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
    },
    label: {
        color: '#666',
        fontSize: 20,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
    },
    label2: {
        color: '#808080',
        fontSize: 15,
        paddingHorizontal: 10,
        marginLeft: 22.5,
        bottom: -35
    },
    label3: {
        color: '#999999DD',
        fontSize: 18.25,
        paddingHorizontal: 15,
        marginTop: 5,
        marginLeft: 22.5,
        bottom: -35
    },
    input: {
        marginBottom: '1%',
        width: '90%',
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    input2: {
        fontSize: 18,
        padding: 10,
        width: '85%',
        height: 75,
        borderWidth: 1,
        borderColor: '#8F8F8F',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 15,
        alignSelf: 'center',
    },
    iconTextInput: {
        padding: 10,
        position: 'absolute',
        left: '82.5%',
        top: 13.5,
    },
    mapView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        top: 0
    },
    views: {
        marginVertical: '1.5%'
    }
});

export default styles;