
export async function getProducts(productsList){

    const response = await fetch("http://127.0.0.1:8000/api/products");
    productsList = await response.json();

    return productsList;
}