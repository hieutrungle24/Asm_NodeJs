import instance from "./instance";
import Product from "../model/product";
export const getProducts = () => {
    const url = "/products"
    return instance.get(url)
}
export const createProduct = (product: Product) => {
    const url = "/products"
    return instance.post(url, product)
}
export const remove = (id) => {
    return instance.delete(`/products/${id}`);
};