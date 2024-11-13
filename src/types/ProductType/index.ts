export interface ProductType {
    _id: string; // MongoDB ObjectId or similar
    publisher: {
        displayName: string;
    };
    title: string;
    category: {
        name: string;
    };
    subCategory: {
        name: string;
    }[];
    price: number;
    thumbnail: string;
    rate: number;
    likes: number;
    weightedScore: number;
};

export default ProductType