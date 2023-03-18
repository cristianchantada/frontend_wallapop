import { setProduct } from "./createProductModel.js";
import {pubSub} from "../utils/pubSubPattern.js"

export function createProduct(createProductFormElement){
    createProductFormElement.addEventListener("submit", (event) => {
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
            // PAINT spinnner está dentro de la función
            setProduct(product);
/*             pubSub.publish(pubSub.TOPICS.HIDDE_SPINNER); */
            window.location = "/";
            pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, "El anuncio ha sido creado correctamente");
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, "Ha ocurrido un error, el anuncio no ha podido ser creado");
        }
    });
}