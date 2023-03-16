import { getProducts } from "./productsModel.js";
import { buildProductsView } from "./productsView.js";
import {pubSub} from "../utils/pubSubPattern.js"

export async function products(productsSectionElement){
    
    let productsList = [];

    try {
        productsList = await getProducts(productsList);

        if(productsList.length > 0){
            pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, `Anuncios encontrados: ${productsList.length}`);
        } else {
            pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, "No existen anuncios disponibles.");
        }

    } catch (error) {
        alert(error);
    }

    buildProductsView(productsList, productsSectionElement);

}