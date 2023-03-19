import {showSpinner, hiddeSpinner} from "../utils/spinnerFunctions.js";
import { setProduct } from "./createProductModel.js";
import {pubSub} from "../utils/pubSubPattern.js";

export function createProduct(createProductFormElement){

    const token = localStorage.getItem('token');

    if(!token){
        window.location = "/";
        alert("Usted no está logueado en la web. Inicie sesión para poder publicar un anuncio");
    }

    createProductFormElement.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(createProductFormElement);

        try {
            showSpinner();
            await setProduct(formData);
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