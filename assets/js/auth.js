const usuarioLogado = localStorage.getItem("usuarioLogado");

if (usuarioLogado !== "true") {
  window.location.href = "login.html";
}