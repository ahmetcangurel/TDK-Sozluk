import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 24,
    },
    title: {
        fontSize: 12,
        marginVertical: 12,
    },
    subContainer: {
        backgroundColor: 'white',
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
    },
    stick: {
        width: 3,
        height: '100%',
        borderRadius: 12,
        backgroundColor: Colors.gray,
        marginHorizontal: 12,
    },
    dataTitle: {
        fontWeight: 'bold',
        color: Colors.dark,
    },
    dataSummary: {
    },
})