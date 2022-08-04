class Product {
    name: string;
    originalPrice: number;
    image: string;
    saleOffPrice?: number;
    categoryProductId?: string;
    description?: string;
    shortDescription?: string;
    constructor(
        name: string,
        originalPrice: number,
        image: string,
        categoryProductId?: string,
        description?: string,
        saleOffPrice?: number,
        shortDescription?: string
    ) {
        this.name = name;
        this.originalPrice = originalPrice;
        this.image = image;
        this.saleOffPrice = saleOffPrice;
        this.categoryProductId = categoryProductId;
        this.description = description;
        this.shortDescription = shortDescription;
    }
}

export default Product