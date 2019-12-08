import React from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { search } from '../../apis/comic-book';
import { ComicBook } from '../../models/comic-book';
import SearchResult from './search-result';
import { getDisplayResultCount } from '../../utils/comic-book';
import { NavigationStackProp } from 'react-navigation-stack';

const MIN_SEARCHABLE_TEXT_LENGTH = 3;

export interface Props {
    navigation: NavigationStackProp;
}

interface State {
    text: string;
    books: ComicBook[],
    isTyping: boolean;
}

export class Search extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Search',
    };

    componentDidMount() {
        this.setState({ isTyping: false });
    }

    updateSearchResults = async (text: string): Promise<void> => {
        let books: ComicBook[] = [];
        if (!!text && text.length >= MIN_SEARCHABLE_TEXT_LENGTH) {
            const results = await search(text);
            books = results && results.slice(0, getDisplayResultCount(this.state && this.state.isTyping));
        }
        this.setState({ books });
    };

    onSearchTextChanged = async (text: string): Promise<void> => {
        this.setState({ text });
        await this.updateSearchResults(text);
    };

    toggleTypingMode = (isTyping: boolean): void => this.setState({ isTyping });

    onSubmitSearch = async (): Promise<void> => {
        this.toggleTypingMode(false);
        await this.updateSearchResults(this.state && this.state.text);
    };

    renderSearchResults = () => {
        const { navigate } = this.props.navigation;
        return this.state && this.state.books && this.state.books.map(book => (
            <SearchResult
                key={book.diamond_id}
                book={book}
                onPress={() => navigate('Detail', { book })} />
        ));
    };

    render() {
        return (
            <View>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search..."
                    onChangeText={this.onSearchTextChanged}
                    onFocus={() => this.toggleTypingMode(true)}
                    onSubmitEditing={this.onSubmitSearch} />
                <ScrollView style={styles.searchResult}>
                    {this.renderSearchResults()}
                </ScrollView>
            </View>
        );
    }
}

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