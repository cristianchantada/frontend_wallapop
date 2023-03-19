import {showSpinner, hiddeSpinner} from "../utils/spinnerFunctions.js";
import {isEmailValid} from "../utils/isEmailValid.js";
import { userRegister } from "./signUpModel.js";
import {pubSub} from "../utils/pubSubPattern.js";

export function signUpController(signUpFormElement){

    signUpFormElement.addEventListener("submit", async (event) =>{
        event.preventDefault();

        const formData = new FormData(signUpFormElement);
        const userEmail = formData.get("email");
        const userPassword = formData.get("password");
        const passwordConfirm = formData.get("password-confirm");

        if(!isEmailValid(userEmail)){
            pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, "El email que ha insertado es incorrecto. Por favor, vuelva a insertarlo");
        } else {
            const userData = {
                username: userEmail,
                password: userPassword
            }
        
            if (userData.password === passwordConfirm){
                try {
                    showSpinner();
                    await userRegister(userData);
                    hiddeSpinner();
                    window.location.reload();
                    alert("El usuario ha sido registrado correctamente");
                    window.location = "/";
                } catch (error) {
                    pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, error.message);
                    signUpFormElement.reset();
                }
            }
        }
    })
}