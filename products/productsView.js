
export function buildProductsView(productsList, productsSectionElement){


    for(const product of productsList){
        const productItemElement = document.createElement('article')
        productItemElement.innerHTML = `
        <a href=/product-detail.html?id=${product.id} class="product">
            <p>${product.name}</p>
            <p>${product.description}</p>
            <p><span>${product.prize}</span> €. <span>${product.operation}</span></p>
            <p>${product.image}</p>
            <br>
        </a>
        `;

        productsSectionElement.appendChild(productItemElement);

    }
}