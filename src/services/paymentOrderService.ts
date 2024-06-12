import { Payment } from "../models/Payment";
async function createOrder(orderData: any) {
    try {
        const rating = await Payment.create(orderData);
        return rating;
    } catch (error) {
        console.error("error adding order", error);
        throw error;
    }
}

async function getOrderById(id: string) {
    try {
        const rating = await Payment.findOne({ where: { bookId: id } });
        if (!rating) throw new Error("order not found");

        return rating;
    } catch (error) {
        console.error("error getting order ", error);
        throw error;
    }
}


export { createOrder, getOrderById };
