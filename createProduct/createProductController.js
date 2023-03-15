import { setProduct } from "./createProductModel.js";

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

        setProduct(product);
        //window.location = "/";

    });

}