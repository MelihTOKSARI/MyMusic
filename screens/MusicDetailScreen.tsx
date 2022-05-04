import React from "react"
import { StyleSheet, Text, View } from "react-native"

const MusicDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Music Detail Screen</Text>
        </View>
    )
}

export default MusicDetailScreen;

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