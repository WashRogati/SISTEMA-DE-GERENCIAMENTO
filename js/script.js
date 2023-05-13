const usuarios = ["admin@admin.com", "wrogati@gmail.com", "teste@gmail.com", "teste2@gmail.com"];
const senhas = ["admin", "wwww"];

function cadastrarUsuario() {
    /*     var cadnome = document.getElementById("nome").value;
        var cadsobrenome = document.getElementById("sobrenome").value; */
    var cademail = document.getElementById("emailSignUp").value;
    var cadpassword = document.getElementById("passwordSignUp").value;


    usuarios.push(cademail);
    senhas.push(cadpassword);

    console.log(usuarios);
    console.log(senhas);
}

function signIn() {
    var SignInScreen = document.querySelector(".sign-in");
    var SignUpScreen = document.querySelector(".sign-up");

    SignInScreen.style.display = "flex";
    SignUpScreen.style.display = "none";
}

function signUp() {
    var SignInScreen = document.querySelector(".sign-in");
    var SignUpScreen = document.querySelector(".sign-up");

    SignInScreen.style.display = "none";
    SignUpScreen.style.display = "flex";
}

function verificarAdmin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const verificarUser = usuarios.includes(email);
    const verificarPass = senhas.includes(password);

    if (verificarUser === true & verificarPass === true) {
        alert("DEU CERTO");
    }
    else {
        alert("Email ou senha errados!");
    }

}