import mongoose from "mongoose";
const ProductSchema = mongoose.Schema ({
    name: {
        type: String,
    },
    originalPrice: {
        type:String,
    },
    image_path: {
        type: String,
    },
    saleOffPrice: {
        type: Number,
    },
    categoryProductId: {
        type: String,
    },
    feature: {
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
 export default mongoose.model('Product',ProductSchema);

