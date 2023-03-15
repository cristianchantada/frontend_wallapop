
export function buildProductsView(productsList, productsSectionElement){


    for(const product of productsList){
        const productItemElement = document.createElement('article')
        productItemElement.innerHTML = `
        <p>${product.name}</p>
        <p>${product.description}</p>
        <p><span>${product.prize}</span><span>${product.operation}</span></p>
        <p>${product.image}</p>
        `;

        productsSectionElement.appendChild(productItemElement);

    }
}