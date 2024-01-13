import { StyleSheet, Text, View } from "react-native"

export function Notification({ notificationText }: { notificationText: string }) {
    return (
        <View style={styles.notification}>
            <Text style={styles.notificationText}>{notificationText}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    notification: {
        position: 'absolute',
        top: 50,
        width: 'auto',
        height: 35,
        backgroundColor: '#EEE',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationText: {
        color: '#555',
        fontSize: 16,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
    },
})