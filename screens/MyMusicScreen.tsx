import React from "react"
import { StyleSheet, Text, View } from "react-native"

const MyMusicScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Music Screen</Text>
        </View>
    )
}

export default MyMusicScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black'
    }
})