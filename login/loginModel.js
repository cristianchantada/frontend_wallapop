import {pubSub} from "../utils/pubSubPattern.js"

export async function userLog(userData){
    try {
/*         pubSub.publish(pubSub.TOPICS.PAINT_SPINNER); */
        const response = await fetch("http://127.0.0.1:8000/auth/login", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const token = await response.json(); 
        localStorage.setItem("token", token.accessToken);
        window.location = "/";

    } catch (error) {
        alert(error);
    } finally {
/*         pubSub.publish(pubSub.TOPICS.HIDDE_SPINNER); */
    }
};