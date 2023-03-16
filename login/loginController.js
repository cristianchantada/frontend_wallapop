import { userLog } from "./loginModel.js";
import {isEmailValid} from "../utils/isEmailValid.js"

export function loginController(logFormElement){

    logFormElement.addEventListener("submit", (event) => {
        
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
    
            userLog(userData)

        }


    })

}