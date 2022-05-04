import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react"
import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/UI/Card";
import Constants from "../constants/Constants";
import { Video } from "../models/Video";
import { AddFavoriteVideo, RemoveFavoriteVideo } from "../redux/actions/FavoriteVideo/FavoriteVideo.action";
import { RootState } from "../redux/store";

type RootStackParamList = {
    BreakingNewsDetail: { video: Video };
};
type MusicDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'BreakingNewsDetail'>;

const MusicDetailScreen = ({ route }: MusicDetailScreenProps) => {

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const favoriteState = useSelector((store: RootState) => store.favorites);

    const [buttonTitle, setButtonTitle] = useState('Add to Favorites');

    useEffect(() => {
        navigation.setOptions({
            headerShown: true
        })

        return () => {
            navigation.setOptions({
                headerShown: false
            })
        }
    }, [])

    useEffect(() => {
        setButtonTitle(favoriteState.favoriteVideos.find(t => t.id === route.params['video'].id)
            ? 'Remove from Favorites'
            : 'Add to Favorites'
        )
    }, [favoriteState.favoriteVideos])

    const onFavoritePressed = () => {
        if(route.params['video'].isFavorite) {
            dispatch(RemoveFavoriteVideo(route.params['video']))
        } else {
            dispatch(AddFavoriteVideo(route.params['video']));
        }
    }

    return (
        <View style={styles.container}>
            <Card backgroundColor={Colors.primary200}>
                <View style={styles.image}>
                    <View>
                        <Image style={styles.image} resizeMode='cover' source={{ uri: route.params['video'].image_url}} />
                    </View>
                </View>
            </Card>
            <View style={styles.videoContainer}>
                <View style={styles.recordContainer}>
                    <Text style={styles.recordItem}>{route.params['video'].title}</Text>
                    <Text style={styles.recordItem}>{route.params['video'].genre_id}</Text>
                    <Text style={styles.recordItem}>{route.params['video'].release_year}</Text>
                </View>
                <Text style={styles.artistText}>{route.params['video'].artist}</Text>
            </View>
            <Button 
                title={buttonTitle} 
                onPress={onFavoritePressed} 
            />
        </View>
    )
}

export default MusicDetailScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: '100%', 
        height: deviceWidth < 400 ? Constants.videoItem.imageHeightNormal : Constants.videoItem.imageHeightBig,
        marginBottom: 8
    },
    imageContainer: {
        width: '100%'
    },
    text: {
        color: 'black'
    },
    recordContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        marginVertical: 10
    },
    recordItem: {
        marginHorizontal: 10,
        fontSize: deviceWidth < 400 ? 15 : 18,
    },
    videoContainer: {
        alignItems: 'center',
    },
    artistText: {
        fontSize: deviceWidth < 400 ? 18 : 22,
        fontWeight: 'bold'
    }
})