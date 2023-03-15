

export async function userRegister(userData){

    try {
        const reponse = await fetch("http://127.0.0.1:8000/auth/register", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            }
        });

        window.location = "/";

    } catch (error) {
        alert(error);
    }

}