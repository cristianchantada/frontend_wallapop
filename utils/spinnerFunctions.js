
export function showSpinner() {
    const spinnerSectionElement = document.querySelector("#spinner-section");
    spinnerSectionElement.innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>`;
}

export function hiddeSpinner() {
    const spinnerSectionElement = document.querySelector("#spinner-section");
    spinnerSectionElement.innerHTML = "";
}
