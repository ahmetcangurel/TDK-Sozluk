import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        height: 48,
        paddingHorizontal: 12,
        borderRadius: 24,
        marginRight: 12,
    },
    title: {
        color: Colors.darkGray,
        fontWeight: 'bold',
        marginLeft: 8,
    }
})