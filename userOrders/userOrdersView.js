export function buildIdentificationView(userName){

    const identificationParagraph = document.createElement("p");
    identificationParagraph.className = "user-p";
    identificationParagraph.textContent = `Usuario: ${userName}`;
    return identificationParagraph;
}
