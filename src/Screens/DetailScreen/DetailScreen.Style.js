import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: Colors.softBrown,
    },
    summary: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
        color: Colors.brown,
    },
    type: {
        fontWeight: 'bold',
        color: Colors.darkGray,
    },
    titleContainer: {
        marginVertical: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 24,
    },
})