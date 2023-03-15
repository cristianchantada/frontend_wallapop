
export async function setProduct(product){
    try {

        await fetch("http://127.0.0.1:8000/api/products", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })

        alert("Producto creado");

    } catch (error) {
        alert(error);
    }
}