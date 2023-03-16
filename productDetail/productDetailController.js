import { decodeToken } from "../utils/decodeToken.js";
import { getProductDetail } from "./productDetailModel.js";
import { builProductDetailView } from "./productDetailView.js";

export async function productDetailController(productDetailSectionElement){

    const params = new URLSearchParams(window.location.search)
    const productId = params.get("id")

    if(!productId){
        window.location = "/";
    }

    try {
        const productDetail = await getProductDetail(productId);
        builProductDetailView(productDetailSectionElement, productDetail);
        
        const encodeToken = localStorage.getItem('token');
        const token = decodeToken(encodeToken);
        const userId = token.userId
        
        if (userId !== productDetail.userId ){ 
            const deleteButton = productDetailSectionElement.querySelector("#delete-button");
            productDetailSectionElement.removeChild(deleteButton);
        }

    } catch (error) {
        alert(error);
    }



    
}