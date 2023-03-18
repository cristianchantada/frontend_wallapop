import {pubSub} from "../utils/pubSubPattern.js"

export async function setProduct(product){
    try {

/*         pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */
        const response = await fetch("http://127.0.0.1:8000/api/products", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })

        
        window.location = "/";
        alert("Producto creado");

    } catch (error) {
        alert(error);
    }
}