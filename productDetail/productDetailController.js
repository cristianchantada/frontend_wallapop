import { decodeToken } from "../utils/decodeToken.js";
import { deleteProduct, getProductDetail } from "./productDetailModel.js";
import { builProductDetailView } from "./productDetailView.js";
import { pubSub } from "../utils/pubSubPattern.js"

export async function productDetailController(productDetailSectionElement){

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    if(!productId){
        window.location = "/";
    }

    try {
/*         pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */
        const productDetail = await getProductDetail(productId);
        productDetailSectionElement.innerHTML = builProductDetailView(productDetail);

/*         pubSub.publish(pubSub.TOPICS.HIDDE_SPINNER); */
        
    } catch (error) {
        pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, error.message);
    }

    const Token = localStorage.getItem('token');
    
    if(Token){
        
        const userData = decodeToken(Token);
        const userId = userData.userId

        if (userId === productDetail.userId ){ 

            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("id", "delete-button");
            deleteButton.innerText = "Borrar anuncio";
            productDetailSectionElement.appendChild(deleteButton);

            deleteButton.addEventListener("click", (event) => {
                event.preventDefault();
                
                const answer = confirm("¿Está seguro de que desea borrar el anuncio?");

                if(answer){
/*                         pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */
                    deleteProduct(productId);
                    alert("El anuncio ha sido borrado correctamente");
/*                         pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */
                    window.location = "/";
                }
    
            })
        }
    }
}