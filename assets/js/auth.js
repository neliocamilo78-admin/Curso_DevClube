const usuarioLogado = localStorage.getItem("usuarioLogado");

if (usuarioLogado !== "true") {
  window.location.href = "../../pages/login.html";
}