import React from 'react';
import { Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { ComicBook } from '../../models/comic-book';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    book: ComicBook;
    // onPress: (event: GestureResponderEvent) => void;
}

export class SearchResult extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={style.resultBox} onPress={(e) => console.log(e)}>
                <Text>{this.props.book.title}</Text>
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    resultBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        height: 80,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
});