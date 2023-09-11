import { App } from "./controller/app.js";

App.mostrarPaginaPrincipal();

document.getElementById("menu-icon").addEventListener("click", function () {
  const menuList = document.getElementById("menuList");
  menuList.style.display =
    menuList.style.display === "block" ? "none" : "block";
});
