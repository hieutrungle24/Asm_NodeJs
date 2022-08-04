import mongoose from "mongoose";
const ProductSchema = mongoose.Schema ({
    image_path: {
        type: String,
    },
    name: {
        type: String,
    },
    saleOffPrice: {
        type: Number,
    },
    originalPrice: {
        type: Number,
    },
    shortDescription: {
        type: String,
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category'
    }
});
 export default mongoose.model('Product',ProductSchema);

