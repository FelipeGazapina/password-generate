import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { PressableButton } from "../components/PressableButton";
import { Notification } from "../components/Notification";

export default function HomeScreen() {
    const [password, setPassword] = React.useState('');
    const [isCopied, setIsCopied] = React.useState(false);
    const [notificationText, setNotificationText] = React.useState('');

    const generatePassword = () => {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var string_length = 8;
        var randomstring = '';
        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        setPassword(randomstring);
    }
    const delay = (delayInms: number) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };

    const copyToClipboard = async () => {
        if (!password) {
            setNotificationText('No password to copy');
            setIsCopied(true);
            await delay(1500)
            setIsCopied(false);
            return;
        }

        let response = await Clipboard.setStringAsync(password);
        if (response) {
            setNotificationText('Password copied to clipboard');
            setIsCopied(response);
            await delay(1500)
            setIsCopied(false);

        }
    }

    return (
        <View style={styles.container}>
            {isCopied && (
                <Notification notificationText={notificationText} />
            )}
            <Text style={styles.simpleText}>Let`s generate a <Text style={styles.focusText}>SAFE</Text> password</Text>
            <View style={styles.code}>
                <Text> {password} </Text>
            </View>
            <View style={styles.buttons}>
                <PressableButton onPress={generatePassword} children={<Text style={styles.button}>Generate</Text>} />
                <PressableButton onPress={copyToClipboard} children={<Text style={styles.button}> &#128203; Copy</Text>} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    code: {
        height: 32,
        width: 150,
        backgroundColor: '#e5e5e5',
        marginVertical: 15,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    simpleText: {
        color: '#CCC',
        fontSize: 18,
    },
    focusText: {
        color: "#555",
        fontWeight: '800',
        fontSize: 26
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        padding: 8,
        color: 'black',
        borderColor: '#e5e5e5',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 4
    }
})