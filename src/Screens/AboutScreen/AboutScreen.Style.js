import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    banner: {
        width: '100%',
        height: 220,
        marginTop: -24,

        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        height: 40,
        resizeMode: 'contain',
        marginTop: 36,
    },
    appName: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 24,
    },
    version: {
        color: Colors.white,
        opacity: .5,
        fontSize: 12,
        fontWeight: 'regular',
        marginTop: 12,
    },
})