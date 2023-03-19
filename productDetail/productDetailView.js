
export function builProductDetailView( productDetail) {
    return`
        <div id="div-detail">
            <p><span>${productDetail.operation}</span><span>${productDetail.name}</span></p>
            <p>${productDetail.description}</p>
            <p>${productDetail.prize} €.</p>
            <img src="${productDetail.image}">
            <br>
        </div>
        `;
}