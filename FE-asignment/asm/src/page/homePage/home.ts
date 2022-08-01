import headerPage from "../compument/header"
import menu from "../compument/menu"

const homePage = {
	render: () => {
		return (
            /*html*/`
            ${headerPage.render()}
            ${menu.render()}
        <div class="product ">
            <h1 class="ml-20 mt-10 text-lg ">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
            <div class="grid grid-cols-5 gap-6 m-10">
            <div>
                <img src="./public/image/iPhone 11 64GB I Chính hãng VNA.jpg"  class="mb-2" alt="">
                <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                <p class="bg-gray-100 p-3 mt-2">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
            </div>
            <div>
                <img src="./public/image/iPhone 11 64GB I Chính hãng VNA.jpg"  class="mb-2" alt="">
                <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                <p class="bg-gray-100 p-3 mt-2">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
            </div>
            <div>
                <img src="./public/image/iPhone 11 64GB I Chính hãng VNA.jpg"  class="mb-2" alt="">
                <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                <p class="bg-gray-100 p-3 mt-2">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
            </div>
            <div>
                <img src="./public/image/iPhone 11 64GB I Chính hãng VNA.jpg"  class="mb-2" alt="">
                <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                <p class="bg-gray-100 p-3 mt-2">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
            </div>
            <div>
                <img src="./public/image/iPhone 11 64GB I Chính hãng VNA.jpg"  class="mb-2" alt="">
                <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                <p class="bg-gray-100 p-3 mt-2">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
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
        <div class="linhkien mx-[100px] mb-[150px]">
        <div class="grid grid-cols-2 mb-5 ">
            <h1 class="ml-20 mt-10 text-lg">LINH KIỆN MÁY TÍNH</h1>
            <a href="#" class="ml-20 mt-10 ">Xem tất cả</a>
        </div>
        <div class="grid grid-cols-9 gap-4 mx-20">
            <div class="bg-[#FFB8B8] rounded-lg">
            <p class="text-white">Phụ kiện Apple</p>
            <img src="./public/image/linhkien.jpg" alt="">
            </div>
            <div class="bg-[#FF94EB] rounded-lg">
            <p class="text-white">Phụ kiện Apple</p>
            <img src="./public/image/linhkien.jpg" alt="">
            </div>
            <div class="bg-[#96FDB5] rounded-lg">
            <p class="text-white">Phụ kiện Apple</p>
            <img src="./public/image/linhkien.jpg" alt="">
            </div>
            <div class="bg-[#FF94EB] rounded-lg">
            <p class="text-white">Phụ kiện Apple</p>
            <img src="./public/image/linhkien.jpg" alt="">
            </div>
            <div class="bg-[#4D91FF] rounded-lg">
            <p class="text-white">Phụ kiện Apple</p>
            <img src="./public/image/linhkien.jpg" alt="">
            </div>
            <div class="bg-[#F5D63D] rounded-lg">
            <p class="text-white">Phụ kiện Apple</p>
            <img src="./public/image/linhkien.jpg" alt="">
            </div>
            <div class="bg-[#FDA363] rounded-lg">
            <p class="text-white">Phụ kiện Apple</p>
            <img src="./public/image/linhkien.jpg" alt="">
            </div>
            <div class="bg-[#D6D6D6] rounded-lg">
            <p class="text-white">Phụ kiện Apple</p>
            <img src="./public/image/linhkien.jpg" alt="">
            </div>  
        </div>
        </div>
  </div>
            `
		)
	}
}

export default homePage