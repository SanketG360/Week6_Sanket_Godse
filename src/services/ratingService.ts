import { Ratings } from "../models/Rating";

async function createRating(ratingData: any) {
    try {
        const rating = await Ratings.create(ratingData);
        return rating;
    } catch (error) {
        console.error("error adding rating", error);
        throw error;
    }
}

async function getRatingById(id: string) {
    try {
        const rating = await Ratings.findOne({ where: { bookId: id } });
        if (!rating) throw new Error("Book not found");

        return rating;
    } catch (error) {
        console.error("error getting rating by bookId", error);
        throw error;
    }
}


export { createRating, getRatingById };
