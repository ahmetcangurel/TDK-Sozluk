import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearData: {
        marginLeft: 'auto',
        marginRight: 8,
        padding: 6,
    },
    clearDataText: {
        color: Colors.red,
        fontSize: 12,
    },
    text: {
        color: Colors.darkGray,
        marginTop: 16,
    },
    flatList: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 8,
    }
})