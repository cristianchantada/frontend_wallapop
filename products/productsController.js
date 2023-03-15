import { getProducts } from "./productsModel.js";
import { buildProductsView } from "./productsView.js";


export async function products(productsSectionElement){
    
    let productsList = [];

    try {
        productsList = await getProducts(productsList);
    } catch (error) {
        alert(error);
    }

    buildProductsView(productsList, productsSectionElement);

}