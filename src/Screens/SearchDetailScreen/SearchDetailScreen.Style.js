import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        paddingHorizontal: 24,
    },
    titleContainer: {
        marginVertical: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.dark,
        textTransform: 'capitalize',
    },
    type: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.darkGray,
        fontStyle: 'italic',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainerLeft: {
        flexDirection: 'row',
    },
    summaryContainer: {
        backgroundColor: Colors.white,
        marginTop: 32,
        padding: 18,
        borderRadius: 8,
    },
    propName: {
        fontSize: 12,
        fontStyle: 'italic',
        color: Colors.red,
    },
    propNum: {
        fontStyle: 'normal',
        color: Colors.darkGray,
    },
    propTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.dark,
        marginVertical: 8,
    },
    propSample: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.darkGray,
        marginLeft: 4,
    },
    separator: {
        backgroundColor: Colors.gray,
        height: 1,
        width: '100%',
        marginVertical: 16,
    },
})