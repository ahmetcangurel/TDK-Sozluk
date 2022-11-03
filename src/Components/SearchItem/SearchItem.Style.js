import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 54,
        borderRadius: 6,
        paddingHorizontal: 16,
        marginVertical: 6,
    },
    title: {
        color: Colors.dark,
        fontWeight: 'bold',
    },
})