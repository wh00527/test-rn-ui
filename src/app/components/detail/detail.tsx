import React from 'react';
import { ComicBook } from '../../models/comic-book';
import { View, Text } from 'react-native';

export interface Props {
    book: ComicBook;
}

export class Detail extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Detail</Text>
            </View>
        )
    }
}