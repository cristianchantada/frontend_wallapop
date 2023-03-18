
export function buildProductsView(product){
    return`
        <a href=/product-detail.html?id=${product.id} class="product">
            <p>${product.name}</p>
            <p>${product.description}</p>
            <p><span>${product.prize}</span> €. <span>${product.operation}</span></p>
            <p>${product.image}</p>
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