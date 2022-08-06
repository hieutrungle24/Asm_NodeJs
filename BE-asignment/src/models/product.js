import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
    },
    saleOffPrice: {
        type: String,
    },
    originalPrice: {
        type: String,
    },
    description: {
        type: String,
    },
    shortDescription: {
        type: String,
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category'
    }
});
export default mongoose.model('Product', ProductSchema);

