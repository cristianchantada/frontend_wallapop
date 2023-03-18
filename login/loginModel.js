import {pubSub} from "../utils/pubSubPattern.js"

export async function userLog(userData){

/*         pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */
        const response = await fetch("http://127.0.0.1:8000/auth/login", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error('No te reconozco pallo. El usuario no existe.');
        }

        const token = await response.json(); 
        localStorage.setItem("token", token.accessToken);
        window.location = "/";

/*     
    finally {
        pubSub.publish(pubSub.TOPICS.HIDDE_SPINNER);
    } */
};