
export async function getProductDetail(productId){

    const response = await fetch(`http://127.0.0.1:8000/api/products/${productId}`);
    const productDetail = await response.json();

    return productDetail;

}

export async function deleteProduct(productId){

    const token = localStorage.getItem('token');
    const response = await fetch(`http://127.0.0.1:8000/api/products/${productId}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

}