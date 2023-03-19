import { buildProductsView, buildZeroProductsView, buildErrorView } from "./productsView.js";
import {showSpinner, hiddeSpinner} from "../utils/spinnerFunctions.js";
import { getProducts } from "./productsModel.js";
import {pubSub} from "../utils/pubSubPattern.js";

export async function productsController(productsSectionElement){
    
    let productsList = [];

    try {
        showSpinner();
        productsList = await getProducts(productsList);
        
        if(productsList.length > 0){
            paintTweets(productsSectionElement, productsList);
            pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, `${productsList.length} anuncios cargados con éxito`);
        } else {
            pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, "Nadie publica anuncios en esta página; por favor publica algo.");
            paintZeroProducts(productsSectionElement);
        }
        
    } catch (error) {
        pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, "Algo ha ido mal, o muy mal.");
        paintErrorView(productsSectionElement);
    } finally {
        hiddeSpinner();
    }
}

function paintTweets(productsSectionElement, productsList ){
    for(const product of productsList){
        let productItemElement = document.createElement('article');
        productItemElement.innerHTML = buildProductsView(product);
        productsSectionElement.appendChild(productItemElement);
    }
}

function paintZeroProducts(productsSectionElement){
    productsSectionElement.innerHTML = buildZeroProductsView();
}

function paintErrorView(productsSectionElement){
    productsSectionElement.innerHTML = buildErrorView();
}