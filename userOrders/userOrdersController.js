
export function userOrdersController(userOrdersSectionElement){

    const token = localStorage.getItem('token');
    const closeSessionButtonElement = document.querySelector("#close-session");

    if(token){
        const userLoginLink = userOrdersSectionElement.querySelector("#user-login");
        const userSignupLink = userOrdersSectionElement.querySelector("#user-signup");
        userOrdersSectionElement.removeChild(userLoginLink);
        userOrdersSectionElement.removeChild(userSignupLink);

        closeSessionButtonElement.addEventListener("click", () => {
            localStorage.removeItem('token');
            window.location.reload();
        });

    } else {
        const createProductLink = userOrdersSectionElement.querySelector("#create-product");
        const closeSessionButton = userOrdersSectionElement.querySelector("#close-session");
        userOrdersSectionElement.removeChild(createProductLink);
        userOrdersSectionElement.removeChild(closeSessionButton);


    }

}
