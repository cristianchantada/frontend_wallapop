
export function builProductDetailView( productDetail) {
    return`
        <article>
            <a href=/product-detail.html?id=${productDetail.id} class="product">
                <p><span>${productDetail.operation}</span><span>${productDetail.name}</span></p>
                <p>${productDetail.description}</p>
                <p>${productDetail.prize} €.</p>
                <img src="${productDetail.image}">
                <br>
            </a>
        </article>
        `;
}