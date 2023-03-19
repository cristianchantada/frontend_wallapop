import {hiddeSpinner, showSpinner} from "../utils/spinnerFunctions.js";
import {isEmailValid} from "../utils/isEmailValid.js";
import { pubSub } from "../utils/pubSubPattern.js";
import { userLog } from "./loginModel.js";

export function loginController(logFormElement){

    logFormElement.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(logFormElement);
        const user = formData.get("user");
        const userPassword = formData.get("password");
        
        if(!isEmailValid(user)){
            pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, "El email que ha insertado es incorrecto. Por favor, vuelva a insertarlo");
        } else {
            const userData = {
                username: user,
                password: userPassword
            }

            try {
                showSpinner();
                await userLog(userData);
                alert("Está bien, pasa anda")
                window.location = "/";
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.PRODUCT_NOTIFICATION, error.message);
            } finally {
                hiddeSpinner();
            }
        }
    })
}