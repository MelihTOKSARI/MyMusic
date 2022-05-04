import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import Constants from "../constants/Constants";
import { Video } from "../models/Video";
import { LoadVideos } from "../redux/actions/AllMusicVideos/AllMusicVideos.action";
import VideoItem from "./VideoItem";

interface VideoListProps {
    videos: Array<Video>
}

const VideoList = (props: VideoListProps) => {

    const dispatch = useDispatch();

    const [cardWidth, setCardWidth] = useState(Constants.videoItem.width);

    useEffect(() => {
        calculateCardWidth();
    })

    const loadMoreVideos = () => {
        dispatch(LoadVideos());
    }

    const deviceWidth = Dimensions.get('window').width;
    const numColumns = Math.floor(deviceWidth / Constants.videoItem.width);
    
    const calculateCardWidth = () => {
        const remainingWidth = deviceWidth - (numColumns * Constants.videoItem.width);

        setCardWidth(Constants.videoItem.width + (remainingWidth / numColumns - 16));
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={props.videos}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                renderItem={(itemData) => <VideoItem cardWidth={cardWidth} video={itemData.item} />}
                onEndReached={loadMoreVideos}
                onEndReachedThreshold={0.1} />
        </View>
    )

}

export default VideoList;