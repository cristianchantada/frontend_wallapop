import { userRegister } from "./signUpModel.js";
import {isEmailValid} from "../utils/isEmailValid.js";
import {pubSub} from "../utils/pubSubPattern.js"

export function signUpController(signUpFormElement){

    signUpFormElement.addEventListener("submit", (event) =>{
        event.preventDefault();

        /* pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */

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
                try {
                    userRegister(userData);
                } catch (error) {
                    pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, error.message);
                }
            }
        }

/*         pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */
    
    })


}