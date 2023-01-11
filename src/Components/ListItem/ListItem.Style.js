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
        marginHorizontal:8,
    },
    title: {
        color: Colors.dark,
        fontWeight: 'bold',
    },
    selected: {
        borderWidth: .5,
        borderColor: Colors.red,
        shadowColor: Colors.red,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
})