import { update } from '../../../api/product'
import AdminHeader from '../../../components/Header/Admin'
import Sidebar from '../../../components/Sidebar'
import { getProductsid } from '../../../api/product'
import Product from "../../../model/product"
const EditProductPage = {
    render: async (id) => {
        console.log(id)
        const res = await getProductsid(id)
        const data: Product[] = res.data
        console.log(res)
        return /*html*/`
        
            
            ${AdminHeader.render()}
        <form id="formEdit">
           <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            
            
            <div class="grow" style="background-color: #F8F8F8">
                <h3>sửa sản phẩm</h3>
                <div class="grid grid-cols-3 gap-8">
                <div class="">
                    <div class="flex flex-col justify-center items-center border rounded-md h-[250px]">
                    <label htmlFor="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clip-rule="evenodd" />
                    </svg>
                    <input id="input-file" type="file" class="hidden" accept="image/jpg, image/jpeg, image/png" />
                </label>

                    <div class="mt-4">ảnh</div>
                    <img id="preview-image" />
                    </div>
                    <label for="">Mô tả ngắn</label>
                    <textarea id="shortDescription" class="w-full border">${data.shortDescription}</textarea>
                    
                </div>
                <div class="col-span-2">
                    <div>Thông tin sản phẩm</div>
                    <div class="flex flex-col mt-4">
                    <label for="">Tên sản phẩm:</label>
                    <input id="name" type="text" placeholder="Tên sản phẩm" value="${data.name}" class="w-full border rounded-sm h-10">
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4 mt-4">
                    <div class="flex flex-col">
                        <label for="">Giá gốc:</label>
                        <input id="originalPrice"  type="text" placeholder="Giá gốc" value="${data.originalPrice}" class="w-full border rounded-sm h-10">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Giá khuyến mãi:</label>
                        <input id="saleOffPrice" type="text"  value="${data.saleOffPrice}" class="w-full border rounded-sm h-10">
                    </div>
                    <div class="flex flex-col">
                        <label for="">danh mục</label>
                        <input id="categoryProductId"  type="text" placeholder="danh mục" value="${data.categoryProductId}" class="w-full border rounded-sm h-10">
                    </div>
                    
                    
                    
                    </div>
                    <div>
                    <label for="">đặt  điểm nổi bật</label>
                    <textarea id="feature" class="w-full border" style="
                     height: 100px;">${data.feature}</textarea>
                    </div>
                    <div>
                    <label for="">Mô tả dài</label>
                    <textarea id="description" class="w-full border" style="
                     height: 100px;">${data.description}</textarea>
                    </div>
                    <button class="border rounded-md bg-blue-300 mt-5" id="btn" style="color: white;">sửa sản phẩm</button>
                    </div>
                    
                </div>
                
                </div>
            </div>
            
        </div>
        </form>
        
        `
    },
    afterRender: async (id) => {

        const editFile = document.querySelector('#edit-file')
        const formEdit = document.querySelector('#formEdit');
        formEdit.addEventListener('submit', function (e) {
            e.preventDefault();

            const post = {
                id: id,
                name: document.querySelector('#name').value,
                originalPrice: document.querySelector("#originalPrice").value,
                saleOffPrice: document.querySelector("#saleOffPrice").value,
                feature: document.querySelector("#feature").value,
                description: document.querySelector("#description").value,
                categoryProductId: document.querySelector("#categoryProductId").value,
                shortDescription: document.querySelector("#shortDescription").value,

            };
            // call api
            update(post);

            window.location.href = '/admin';

        });

    }
}

export default EditProductPage;