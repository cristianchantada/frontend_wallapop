import { deleteProduct, getProductDetail } from "./productDetailModel.js";
import {showSpinner, hiddeSpinner} from "../utils/spinnerFunctions.js";
import { builProductDetailView } from "./productDetailView.js";
import { decodeToken } from "../utils/decodeToken.js";
import { pubSub } from "../utils/pubSubPattern.js"

export async function productDetailController(productDetailSectionElement){


    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    let productDetail = "";

    if(!productId){
        window.location = "/";
    }

    try {
/*         pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */
        showSpinner();
        productDetail = await getProductDetail(productId);
        productDetailSectionElement.innerHTML = builProductDetailView(productDetail);

/*         pubSub.publish(pubSub.TOPICS.HIDDE_SPINNER); */
        
    } catch (error) {
        pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, error.message);
    }

    hiddeSpinner();
    const Token = localStorage.getItem('token');
    
    if(Token){
        
        const userData = decodeToken(Token);
        const userId = userData.userId

        if (userId === productDetail.userId ){ 

            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            deleteButton.setAttribute("id", "delete-button");
            deleteButton.innerText = "Borrar anuncio";
            productDetailSectionElement.appendChild(deleteButton);

            deleteButton.addEventListener("click", (event) => {
                event.preventDefault();
                
                const answer = confirm("¿Está seguro de que desea borrar el anuncio?");

                if(answer){
/*                         pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */
                    showSpinner();
                    deleteProduct(productId);
                    hiddeSpinner();
                    alert("El anuncio ha sido borrado correctamente");
/*                         pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */
                    window.location = "/";
                }
    
            })
        }
    }
}