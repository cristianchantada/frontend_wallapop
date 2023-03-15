
export function closeSession(closeSessionButtonElement){
    closeSessionButtonElement.addEventListener("click", () => {
        localStorage.removeItem('token');
        window.location.reload();

    })

}