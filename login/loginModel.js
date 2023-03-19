
export async function userLog(userData){

        const fetchURL = "http://127.0.0.1:8000/auth/login";
        const response = await fetch(fetchURL, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            if(fetchURL === "http://127.0.0.1:8000/auth/login"){
                throw new Error('No te reconozco pallo. EMosido ENGAÑADO');
            } else {
                throw new Error('¡ Alaaaa ! ya has roto algo. No toques, pa q tocas?'); 
            }
        }

        const token = await response.json(); 
        localStorage.setItem("token", token.accessToken);
};