import mongoose from "mongoose";
const ProductSchema = mongoose.Schema ({
    name: {
        type: String,
    },
    originalPrice: {
        type: Number,
    },
    description: {
        type: String,
    },
});
 export default mongoose.model('Product',ProductSchema);

