const formulario = document.getElementById("loginForm");
const mensagemErro = document.getElementById("mensagemErro");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "123456") {
    window.location.href = "index.html";
  } else {
    mensagemErro.textContent = "Usuário ou senha inválidos.";
  }
});