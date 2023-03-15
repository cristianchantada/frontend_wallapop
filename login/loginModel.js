
export async function userLog(userData){
    try {
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
    }
};