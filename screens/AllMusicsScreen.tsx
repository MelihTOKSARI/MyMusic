import React, { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { GetDataset } from "../redux/actions/Dataset/Dataset.action"
import { RootState } from "../redux/store"

const AllMusicScreen = () => {
    const dispatch = useDispatch();

    const allVideosState = useSelector((store: RootState) => store.allMusicVideos);

    useEffect(() => {
        console.log('[AllMusicScreen-useEffect] allVideoState.musicVideos.length:', allVideosState.musicVideos?.length);
        dispatch(GetDataset());
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>All Music Screen</Text>
            <Text>Total Music Count: {allVideosState.musicVideos?.length}</Text>
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