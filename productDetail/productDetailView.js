

export function builProductDetailView(productDetailSectionElement, productDetail) {
    productDetailSectionElement.innerHTML = `
        <p>${productDetail.name}</p>
        <p>${productDetail.description}</p>
        <p><span>${productDetail.prize}</span> €. <span>${productDetail.operation}</span></p>
        <p>${productDetail.image}</p>
        <br>
        <button id="delete-button" type="submit">Borrar anuncio</button>
    `
}