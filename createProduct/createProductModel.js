
export async function setProduct(product){

    const response = await fetch("http://127.0.0.1:8000/a", {
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