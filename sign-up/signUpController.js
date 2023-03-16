import { userRegister } from "./signUpModel.js";
import {isEmailValid} from "../utils/isEmailValid.js"

export function signUpController(signUpFormElement){

    signUpFormElement.addEventListener("submit", (event) =>{
        event.preventDefault();

        const formData = new FormData(signUpFormElement);
    
        const userEmail = formData.get("email");
        const userPassword = formData.get("password");
        const passwordConfirm = formData.get("password-confirm");

        if(!isEmailValid(userEmail)){
            window.location.reload();
            alert("El email que ha insertado es incorrecto. Por favor, vuelva a insertarlo");
        } else {
            const userData = {
                username: userEmail,
                password: userPassword
            }
        
            if (userData.password === passwordConfirm){
                userRegister(userData);
            }
        }
    
    })


}