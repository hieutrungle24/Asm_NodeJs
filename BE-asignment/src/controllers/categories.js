import categories from "../models/categories";

import Product from "../models/product";

export const add = async (req, res) => {
    try {
        const category = await new categories(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được danh mục'
        })
    }
}
export const list = async (req, res) => {
    try {
        const category = await categories.find().exec()
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không tìm được danh mục'
        })
    }
}
export const read = async (req, res) => {
    try {
        const category = await categories.findOne({ _id: req.params.id }).exec();
        const products = await Product.find({ category: category }).populate('category').select("-category").exec();
        res.json({
            category,
            products
        });
    } catch (error) {
        res.status(400).json({
            error: 'Không tìm được danh mục'
        })
    }
}