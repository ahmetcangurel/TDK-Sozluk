import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 36,
    },
    iconContainer: {
        backgroundColor: Colors.gray,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.dark,
        flex: 1,
        textAlign: 'center',
    },
    logo: {
        width: '100%',
        height: 32,
        resizeMode: 'contain',
        marginTop: 48,
    },
    summaryContainer: {
        marginTop: 48,
        paddingHorizontal: 40,
    },
    summary: {
        textAlign: 'center',
        fontSize: 14,
        color: Colors.darkGray,
    },
    summaryTitle: {
        fontWeight: 'bold',
    },
})