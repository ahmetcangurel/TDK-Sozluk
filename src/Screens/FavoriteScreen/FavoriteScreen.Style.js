import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        flex: 1,
        paddingHorizontal: 8,
    },
    buttonContainer: {
        paddingHorizontal: 8,
        paddingBottom: 16,
        backgroundColor: Colors.white,
    },
    topButtonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        marginHorizontal: 4,
    },
})