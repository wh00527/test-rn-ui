import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { search } from '../../apis/comic-book';
import { ComicBook } from '../../models/comic-book';
import SearchResult from '../../components/search-result';
import { getDisplayResultCount } from '../../utils/comic-book';
import { NavigationStackProp } from 'react-navigation-stack';

const MIN_SEARCHABLE_TEXT_LENGTH = 3;

export interface Props {
    navigation: NavigationStackProp;
}

export default function Search(props: Props) {
    const [text, setText] = useState('');
    const [books, setBooks] = useState([] as ComicBook[]);

    const updateSearchResults = async (text: string, isTyping: boolean): Promise<void> => {
        if (!text || text.length < MIN_SEARCHABLE_TEXT_LENGTH) {
            return;
        }
        const results = await search(text);
        setBooks(results && results.slice(0, getDisplayResultCount(isTyping)));
    };

    const onSearchTextChanged = async (text: string): Promise<void> => {
        setText(text);
        await updateSearchResults(text, true);
    };

    const onSubmitSearch = async (): Promise<void> => {
        await updateSearchResults(text, false);
    };

    const renderSearchResults = (books: ComicBook[]) => {
        const { navigate } = props.navigation;
        return books && books.map(book => (
            <SearchResult
                key={book.diamond_id}
                book={book}
                onPress={() => navigate('Detail', { book })} />
        ));
    };

    return (
        <View>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                onChangeText={onSearchTextChanged}
                onSubmitEditing={onSubmitSearch} />
            <ScrollView style={styles.searchResult}>
                {renderSearchResults(books)}
            </ScrollView>
        </View>
    );
}

Search.navigationOptions = { title: 'Search' };

const styles = StyleSheet.create({
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    searchResult: {
        marginBottom: 80,
    },
});