import React from 'react';
import { ComicBook } from '../../models/comic-book';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { formatDate } from '../../utils/date';

export interface Props {
    navigation: NavigationStackProp;
}

export default function Detail(props: Props) {
    const book = props.navigation.getParam('book') as ComicBook;

    return (
        <ScrollView style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>{book.title}</Text>
            </View>
            <View style={styles.section}>
                <Text>{book.description}</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.metaSection}>
                    <Text style={styles.metaKey}>Price</Text>
                    <Text>{book.price}</Text>
                </View>
                <View style={styles.metaSection}>
                    <Text style={styles.metaKey}>Publisher</Text>
                    <Text>{book.publisher}</Text>
                </View>
                <View style={styles.metaSection}>
                    <Text style={styles.metaKey}>Release Date</Text>
                    <Text>{formatDate(book.release_date)}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

Detail.navigationOptions = (options: { navigation: NavigationStackProp }) => {
    return {
        title: options.navigation.getParam('book').title,
    };
};

const styles = StyleSheet.create({
    page: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    },
    section: {
        marginTop: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    metaSection: {
        marginBottom: 10,
    },
    metaKey: {
        fontWeight: 'bold',
    },
});