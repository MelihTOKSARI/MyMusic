import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux";
import VideoList from "../components/VideoList";
import { RootState } from "../redux/store";

const MyMusicScreen = () => {

    const favoriteState = useSelector((store: RootState) => store.favorites);

    return (
        <View style={styles.container}>
            <VideoList videos={favoriteState.favoriteVideos} />
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