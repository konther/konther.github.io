// auth.js

// Função para autenticar o usuário com e-mail/senha
function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Autenticação bem-sucedida
            const user = userCredential.user;
            console.log("Usuário autenticado:", user);
            // Redirecione para a página protegida
            window.location.href = "/mapa/index.html";
        })
        .catch((error) => {
            // Ocorreu um erro ao autenticar o usuário
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Erro ao autenticar o usuário:", errorMessage);
            // Exiba a mensagem de erro ao usuário (opcional)
            alert(errorMessage);
        });
}
