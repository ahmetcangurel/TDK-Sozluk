import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 75,
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    title: {
        color: Colors.dark,
        fontSize: 16,
    },
})