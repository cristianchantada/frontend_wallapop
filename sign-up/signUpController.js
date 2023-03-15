import { userRegister } from "./signUpModel.js";

export function signUpController(signUpFormElement){

    signUpFormElement.addEventListener("submit", (event) =>{
        event.preventDefault();

        const formData = new FormData(signUpFormElement);
    
        const userEmail = formData.get("email");
        const userPassword = formData.get("password");
        const passwordConfirm = formData.get("password-confirm");
    
        const userData = {
            username: userEmail,
            password: userPassword
        }
    
        if (userData.password === passwordConfirm){
            userRegister(userData);
        }
    })


}