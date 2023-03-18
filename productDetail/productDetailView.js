
export function builProductDetailView( productDetail) {
    return `
        <p>${productDetail.name}</p>
        <p>${productDetail.description}</p>
        <p><span>${productDetail.prize}</span> €. <span>${productDetail.operation}</span></p>
        <p>${productDetail.image}</p>
        <br>
    `
}