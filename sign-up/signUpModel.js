
export async function userRegister(userData){

    const response = await fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (!response.ok) {
        throw new Error("Ha habido un error en el proceso de creación del usuario");
    }
}