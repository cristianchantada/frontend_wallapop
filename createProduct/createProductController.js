import {showSpinner, hiddeSpinner} from "../utils/spinnerFunctions.js";
import { setProduct } from "./createProductModel.js";
import {pubSub} from "../utils/pubSubPattern.js"

export function createProduct(createProductFormElement){

    const token = localStorage.getItem('token');

    if(!token){
        window.location = "/";
        alert("Usted no está logueado en la web. Inicie sesión para poder publicar un anuncio");
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
            showSpinner();
            await setProduct(product);
            alert("El producto ha sido publicado correctamente");
            window.location = "/";
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, error.message);
            createProductFormElement.reset();
        } finally {
            hiddeSpinner();
        }
    });
}