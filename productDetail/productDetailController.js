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
        
    } catch (error) {
        alert(error);
    }

}