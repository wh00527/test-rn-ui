import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { ComicBook } from '../../models/comic-book';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    book: ComicBook;
    onPress: () => void;
}

export default function SearchResult(props: Props) {
    return (
        <TouchableOpacity style={styles.resultBox} onPress={props.onPress}>
            <Text>{props.book.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    resultBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        height: 80,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
});