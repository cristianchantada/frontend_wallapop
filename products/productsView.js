
export function buildProductsView(product){
    return`
        <a href=/product-detail.html?id=${product.id} class="product-article">
            <p><span>${product.operation}</span><span>${product.name}</span></p>
            <p>${product.description}</p>
            <p>${product.prize} €.</p>
            <img src="${product.image}">
            <br>
        </a>
        `;
    }

export function buildZeroProductsView(){
    return `<p>No exiten productos que ofrecerte</p>
    <p>Pero puedes publicar tú una oferta.</p>
    `
}

export function buildErrorView(){
    return `<p>Se ha producido un error en la carga de los anuncios</p>
    <p>Por favor, inténtelo más tarde</p>
    `  
}