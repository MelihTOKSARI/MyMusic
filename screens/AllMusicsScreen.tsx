import React from "react"
import { StyleSheet, Text, View } from "react-native"

const AllMusicScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>All Music Screen</Text>
        </View>
    )
}

export default AllMusicScreen;

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