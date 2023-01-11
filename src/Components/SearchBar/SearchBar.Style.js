import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

export default styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    textInput: {
        flex: 1,
        backgroundColor: 'white',
        height: 52,
        borderRadius: 8,
        paddingLeft: 52,
    },
    searchIcon: {
        color: Colors.dark,
        position: 'absolute',
        zIndex: 1,
        left: 14,
    },
    xIcon: {
        color: Colors.dark,
        position: 'absolute',
        zIndex: 1,
        right: 14,
    },
    cancelButton: {
        paddingHorizontal: 8,
    },
    cancelButtonText: {
        color: Colors.dark,
    },
    lettersContainer: {
        width: '100%',
        height: 48,
        //backgroundColor: '#E2E2E2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 19,
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
    deSelected: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})