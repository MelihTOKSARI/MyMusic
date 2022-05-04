import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

import Colors from "../constants/Colors"
import Constants from "../constants/Constants"
import { Video } from "../models/Video"
import Card from "./UI/Card"

interface VideoItemProps {
    cardWidth: number,
    video: Video
}

const VideoItem = (props: VideoItemProps) => {
    return (
        <Card backgroundColor={Colors.primary200}>
            <View style={styles(props.cardWidth).container}>
                <View>
                    <Image style={styles(props.cardWidth).image} resizeMode='cover' source={{ uri: props.video.image_url}} />
                </View>
                <Text style={styles().title}>{props.video.title}</Text>
                <Text style={styles().title}>{props.video.artist}</Text>
            </View>
        </Card>
    )
}

export default VideoItem;

const styles = (width?: number) => StyleSheet.create({
    container: { 
        alignItems: 'center', 
        width: width,
        marginBottom: 10
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: width, 
        height: Constants.videoItem.imageHeight,
        marginBottom: 8
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})