import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    moreIcon: {
        position: 'absolute',
        top: 4,
        right: 4,
        padding: 12,
    },
    backgroundContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    banner: {
        position: 'absolute',
        width: '100%',
        height: 230,
    },
    logo: {
        marginTop: 95,
        height: 40,
        resizeMode: 'contain',
        position: 'absolute',
        top: 0,
    },
    searchBar: {
        paddingTop: 8,
        paddingHorizontal: 8,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.separator,
    },
})