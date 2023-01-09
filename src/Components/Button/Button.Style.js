import { StyleSheet } from 'react-native'
import Colors from '../../utils/Colors'

const base = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 48,
        marginVertical: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 32,
    },
})

export default {
    primary: StyleSheet.create({
        ...base,
        container: {
            ...base.container,
            backgroundColor: Colors.gray,
        },
        title: {
            ...base.title,
            color: Colors.dark
        }
    }),
    secondary: StyleSheet.create({
        ...base,
        container: {
            ...base.container,
            backgroundColor: Colors.red,
        },
        title: {
            ...base.title,
            color: Colors.white
        }
    }),
    nonBackgorund: StyleSheet.create({
        ...base,
        container: {
            ...base.container,
        },
        title: {
            ...base.title,
            color: Colors.dark
        }
    })
}