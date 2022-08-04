import { getProducts } from "../../api/product"
import Product from "../../model/product"
import footer from "../../compoment/footer"
import header from "../../compoment/header"
import menu from "../../compoment/menu"
import banner from "../../compoment/banner"

const homePage = {
    render: async () => {
        const res = await getProducts()
        const data: Product[] = res.data
        console.log(data.map((p) => (p.id)));
        return /*html*/`
            ${header.render()}
        <div class="flex mt-4 divide-x">
            ${menu.render()}
            ${banner.render()}
        </div>    
            <h1 class="ml-20 mt-10 text-lg ">ĐIỆN THOẠI HOT NHẤT</h1> 
        <div class="product ">
            
            <div class=" grid grid-cols-5 gap-6 m-10">
            ${data.map((p, index) => /*html*/`
                <div>
                    <a href="/products/${p.id}"><img src="${p.image}"  class="mb-2" alt=""></a>
                    <a href="/products/${p.id}"><p class="mb-2">${p.name}</p></a>
                    <label class="text-red-700 pr-4">${p.saleOffPrice}</label>
                    <label class="text-gray-400">${p.originalPrice}</label>
                    <p class="bg-gray-100 p-3 mt-2">${p.shortDescription}</p>
                </div>`).join('')}
            </div>
        </div>
        <div class="phukien mx-[100px]">
            <div class="grid grid-cols-2 mb-5 ">
                <h1 class="ml-20 mt-10 text-lg">PHỤ KIỆN</h1>
                <a href="#" class="ml-20 mt-10 ">Xem tất cả</a>
            </div>
            <div class="grid grid-cols-9 gap-4 mx-20">
                <div class="bg-[#FFB8B8] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
            </div>
            <div class="bg-[#FF94EB] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
                </div>
            <div class="bg-[#96FDB5] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
            </div>
            <div class="bg-[#FF94EB] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
            </div>
            <div class="bg-[#4D91FF] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
            </div>
            <div class="bg-[#F5D63D] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
            </div>
            <div class="bg-[#FDA363] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
            </div>
            <div class="bg-[#D6D6D6] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
            </div>
            <div class="bg-[#F5D63D] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
            </div>
            <div class="bg-[#FDA363] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
            </div>
        </div>
        </div>
  </div>
  <br>
  <br>
  ${footer.render()}
        `}
}

export default homePage