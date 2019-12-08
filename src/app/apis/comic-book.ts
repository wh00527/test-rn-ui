import { API_URL } from '../configs/constants';
import { ComicBook } from '../models/comic-book';

export const search = async (title: string): Promise<ComicBook[]> => {
    const response = await fetch(`${API_URL}/query?title=${title}`);
    const result = await response.json();
    return result && result.comics;
};