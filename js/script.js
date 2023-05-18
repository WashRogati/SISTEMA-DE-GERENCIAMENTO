
const usuarios = [
    {
        nome: "admin",
        sobrenome: "admin",
        email: "admin@admin.com",
        password: "admin"
    },
    {
        nome: "Washington",
        sobrenome: "Rogati",
        email: "wrogati@gmail.com",
        password: "w07112005#"
    }
];

console.log(usuarios);
function cadastrarUsuario() {
    var cadNome = document.getElementById("nome").value;
    var cadSobrenome = document.getElementById("sobrenome").value;
    var cadEmail = document.getElementById("emailSignUp").value;
    var cadPassword = document.getElementById("passwordSignUp").value;
    

    usuarios.push({nome:cadNome,sobrenome:cadSobrenome, email: cadEmail, password: cadPassword });
    console.log(usuarios);
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

    const usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.password === password;
      });

    console.log("Usuario encontrado:",usuarioEncontrado);
/* 
    const verificarUser = emails.includes(email);
    const verificarPass = senhas.includes(password); */

    if (usuarioEncontrado) {
        alert("funcionou!");
    }
    else {
        alert("Email ou senha errados!");
    }

}

/* menu html */


function dropdownCad(){
    var dropcad = document.getElementById("cadastro");

    dropcad.style.transition = "all 0.5s ease";
    dropcad.style.height = "200px";
    
}

function dropdownCadL(){
    var dropcad = document.getElementById("cadastro");

    dropcad.style.transition = "all 0.5s ease";
    dropcad.style.height = "0";
}

function dropdownCon(){
    var dropcon = document.getElementById("consulta");

    dropcon.style.transition = "all 0.5s ease";
    dropcon.style.height = "200px";
    
}
function dropdownConL(){
    var dropcon = document.getElementById("consulta");

    dropcon.style.transition = "all 0.5s ease";
    dropcon.style.height = "0";
    
}