import { setProduct } from "./createProductModel.js";
import {pubSub} from "../utils/pubSubPattern.js"

export function createProduct(createProductFormElement){

    const token = localStorage.getItem('token');

    if(!token){
        alert("Usted no está logueado en la web. Inicie sesión para poder publicar un anuncio");
        window.location = "/";
    }

    createProductFormElement.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(createProductFormElement);
        
        const productTitle = formData.get("productTitle");
        const productDescription = formData.get("product-description");
        const productPrize = formData.get("prize");
        const operationSelector = formData.get("operation-selector");
        const productImage = formData.get("image");
        
        const product = {
            name: productTitle,
            description: productDescription,
            prize: productPrize,
            operation: operationSelector,
            image: productImage  
        }
        
        try {
            /*pubSub.publish(pubSub.TOPICS.PAINT_SPINNER);*/
            await setProduct(product);
            /*pubSub.publish(pubSub.TOPICS.HIDDE_SPINNER);*/
            /*pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, "El anuncio ha sido creado correctamente");*/
            alert("El producto ha sido publicado correctamente");
            window.location = "/";
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, error.message);
            alert(error.message);
            window.location = "/";
        }
    });
}

        
