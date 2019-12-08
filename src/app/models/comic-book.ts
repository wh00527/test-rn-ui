export class ComicBook {
    creators: string;
    description: string;
    diamond_id: string;
    price: string;
    publisher: string;
    release_date: string;
    title: string;

    constructor(args: any) {
        const {
            creators,
            description,
            diamond_id,
            price,
            publisher,
            release_date,
            title,
        } = args;
        this.creators = creators;
        this.description = description;
        this.diamond_id = diamond_id;
        this.price = price;
        this.publisher = publisher;
        this.release_date = release_date;
        this.title = title;
    }
}