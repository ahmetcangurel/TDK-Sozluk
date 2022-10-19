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
        marginRight: 40,
    },
    contactContainer: {
        marginVertical: 32,
    },
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.dark,
    },
    contactAdressContainer: {
        marginVertical: 20,
    },
    contactAdress: {
        fontSize: 14,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    contactNumber: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8,
    },
})