import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default styles = StyleSheet.create({
    container: {
        height: 44,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: Colors.dark
    },
})