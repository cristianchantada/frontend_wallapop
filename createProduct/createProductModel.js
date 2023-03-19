
export async function setProduct(formData){

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

    const response = await fetch("http://127.0.0.1:8000/api/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    });

    if (!response.ok) {
        throw new Error('Lo sentimos, el anuncio no ha podido ser creado. Por favor, inténtelo en otro momento o póngase en contacto con el administrador.');
    }
}