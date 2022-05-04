import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Icon from 'react-native-vector-icons/Ionicons';

import ErrorOverlay from "../components/UI/ErrorOverlay"
import LoadingOverlay from "../components/UI/LoadingOverlay"
import VideoList from "../components/VideoList"
import { GetDataset } from "../redux/actions/Dataset/Dataset.action"
import { RootState } from "../redux/store"
import Colors from "../constants/Colors";

const AllMusicScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const allVideosState = useSelector((store: RootState) => store.allMusicVideos);
    const datesetState = useSelector((store: RootState) => store.dataset);
    const [genreModalOpened, setGenreModalOpened] = useState(false);

    function onFilterGenrePressed() {
        navigation.navigate('FilterGenreModal');
    }
    
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            return <Icon
                style={{ marginRight: 12 }}
                name="filter-outline"
                size={24}
                color={Colors.primary400}
                onPress={onFilterGenrePressed}
            />
          }
        });
    }, [navigation, onFilterGenrePressed]);

    useEffect(() => {
        dispatch(GetDataset());
    }, [])

    const onGenreModalClosed = () => {
        setGenreModalOpened(false);
    }

    return (
        <View style={styles.container}>
            {
                datesetState.isLoading
                    ? <LoadingOverlay />
                    : datesetState.hasError
                        ? <ErrorOverlay message={datesetState.errorMessage} />
                        : <VideoList videos={allVideosState.visibleVideos} />
            }
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