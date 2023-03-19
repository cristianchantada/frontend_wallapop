import {showSpinner, hiddeSpinner} from "../utils/spinnerFunctions.js";
import { userLog } from "./loginModel.js";
import {isEmailValid} from "../utils/isEmailValid.js";
/* import {pubSub} from "../utils/pubSubPattern.js" */

export function loginController(logFormElement){

    logFormElement.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(logFormElement);
        const user = formData.get("user");
        const userPassword = formData.get("password");
        
        if(!isEmailValid(user)){
            alert("El email que ha insertado es incorrecto. Por favor, vuelva a insertarlo");
            logFormElement.reset();
            window.location.reload();
        } else {
            const userData = {
                username: user,
                password: userPassword
            }

            try {
                showSpinner();
                await userLog(userData);
                window.location = "/";
            } catch (error) {
                alert(error.message);
                logFormElement.reset();
                window.location.reload();
            }
        }
    })
}