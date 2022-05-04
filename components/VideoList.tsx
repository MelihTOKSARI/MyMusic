import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";

import Constants from "../constants/Constants";
import { Video } from "../models/Video";
import { ClearFilter, FilterVideos, LoadVideos } from "../redux/actions/AllMusicVideos/AllMusicVideos.action";
import VideoItem from "./VideoItem";

interface VideoListProps {
    videos: Array<Video>
}

const VideoList = (props: VideoListProps) => {

    const dispatch = useDispatch();

    const [cardWidth, setCardWidth] = useState(Constants.videoItem.width);
    const [filterText, setFilterText] = useState('');

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

    const onFilterTextChanged = (text: string) => {
        setFilterText(text);
        if(text.length > 0) {
            dispatch(FilterVideos(text))
        } else {
            dispatch(ClearFilter());
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <TextInput 
                style={styles.filterInput} 
                value={filterText} 
                onChangeText={onFilterTextChanged} 
                placeholder="Search Record" />
            {
                props.videos.length > 0 &&
                <FlatList
                    data={props.videos}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={numColumns}
                    renderItem={(itemData) => <VideoItem cardWidth={cardWidth} video={itemData.item} />}
                    onEndReached={loadMoreVideos}
                    onEndReachedThreshold={0.1} />
            }
            
            {
                props.videos.length === 0 &&
                <Text style={styles.infoText}>Sorry, we couldn't find any video</Text>
            }
        </View>
    )
}

export default VideoList;

const styles = StyleSheet.create({
    filterInput: {
        height: 50,
        fontSize: 16,
        borderColor: Colors.primary200,
        borderWidth: 1,
        borderRadius: 8,
        color: Colors.primary200,
        margin: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    infoText: {
        marginTop: 30
    }
});