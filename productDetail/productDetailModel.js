
export async function getProductDetail(productId){

    

    const response = await fetch(`http://127.0.0.1:8000/api/products/${productId}`);
    const productDetail = await response.json();

    return productDetail;

}