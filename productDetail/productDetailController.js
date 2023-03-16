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
                        deleteProduct(productId);
                        alert("El anuncio ha sido borrado correctamente");
                        window.location = "/";
                    }
        
                })
            }
        }

        // Borrado de producto:


    } catch (error) {
        alert(error);
    }



    
}