
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Genre } from "../models/Genre";
import { GenreSelected } from "../redux/actions/Genre/Genre.action";
import { RootState } from "../redux/store";

const FilterGenreModal = () => {

    const dispatch = useDispatch();

    const genreState = useSelector((state: RootState) => state.genre);

    const onGenreSelected = (genreId: number) => {
        dispatch(GenreSelected(genreId));
    }

    const renderGenre = (item: Genre) => {
        return <Pressable onPress={onGenreSelected.bind(this, item.id)} style={styles(item.selected).genreContainer}>
            <Text style={styles(item.selected).genreText}>{item.name}</Text>
            <View style={{ height: 1, width: '100%', backgroundColor: 'grey' }} />
        </Pressable>
    }

    return (
        <View style={styles().container}>
            <Text style={styles().text}>Select genre to filter records</Text>
            <FlatList
                data={genreState.genres}
                keyExtractor={item => item.id.toString()}
                renderItem={(itemData) => renderGenre(itemData.item)}
            />
        </View>
    )
}

export default FilterGenreModal;

const styles = (isSelected?: boolean) => StyleSheet.create({
    container: {
        marginTop: 60,
        paddingHorizontal: 24
    },
    text: {
        textAlign: 'center',
        width: '100%',
        marginBottom: 10
    },
    genreContainer: {
        marginVertical: 6,

    },
    genreText: {
        color: !isSelected ?"rgba(84, 84, 84, 1)":"black",
        fontWeight: isSelected ? "bold" :"normal",
        marginBottom: 2
    }
})