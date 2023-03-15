import { userLog } from "./loginModel.js";

export function loginController(logFormElement){

    logFormElement.addEventListener("submit", (event) => {
        
        event.preventDefault();

        const formData = new FormData(logFormElement);
        const user = formData.get("user");
        const userPassword = formData.get("password");

        const userData = {
            username: user,
            password: userPassword
        }

        userLog(userData)

    })

}