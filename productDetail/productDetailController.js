import { decodeToken } from "../utils/decodeToken.js";
import { deleteProduct, getProductDetail } from "./productDetailModel.js";
import { builProductDetailView } from "./productDetailView.js";

export async function productDetailController(productDetailSectionElement){

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    if(!productId){
        window.location = "/";
    }

    try {
        const productDetail = await getProductDetail(productId);
        builProductDetailView(productDetailSectionElement, productDetail);
        
        const encodeToken = localStorage.getItem('token');
        const token = decodeToken(encodeToken);
        const userId = token.userId
        const deleteButton = productDetailSectionElement.querySelector("#delete-button");
        
        if (userId !== productDetail.userId ){ 
            productDetailSectionElement.removeChild(deleteButton);
        }

        // Borrado de producto:

        deleteButton.addEventListener("click", (event) => {
            event.preventDefault();

            deleteProduct(productId);
            alert("El anuncio ha sido borrado correctamente");
            window.location = "/";

        })

    } catch (error) {
        alert(error);
    }



    
}