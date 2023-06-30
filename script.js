// Sélection des éléments de navigation
const itemsNav = document.querySelectorAll(".nav-li");

// Sélection des éléments de projet
const itemsProjet = document.querySelectorAll(".item-projet");

// Sélection des éléments de compétence
const itemsCompetence = document.querySelectorAll(".icone-container");

// Sélection des sections désactivées
const sectOff = document.querySelectorAll(".sectOff");

// Sélection des éléments d'expérience flexible
const flexExperience = document.querySelectorAll(".flex-experience");

// Fonction pour le mode jour/nuit
function dayMode() {
  document.querySelector("body").classList.toggle("background-day");
  document.querySelector(".header").classList.toggle("background-day-gray");
  document.querySelector(".nav-ul").classList.toggle("background-day-gray");

  // Appliquer le mode jour/nuit aux sections désactivées
  for (var i = 0; i < sectOff.length; i++) {
    sectOff[i].classList.toggle("background-day-gray");
  }

  // Appliquer le mode jour/nuit aux éléments de navigation
  for (var i = 0; i < itemsNav.length; i++) {
    itemsNav[i].classList.toggle("text-day");
  }

  // Appliquer le mode jour/nuit aux éléments de projet
  for (var i = 0; i < itemsProjet.length; i++) {
    itemsProjet[i].classList.toggle("background-day-gray");
  }

  // Appliquer le mode jour/nuit aux éléments de compétence
  for (var i = 0; i < itemsCompetence.length; i++) {
    itemsCompetence[i].classList.toggle("background-day");
  }

  // Appliquer le mode jour/nuit aux éléments d'expérience flexible
  for (var i = 0; i < flexExperience.length; i++) {
    flexExperience[i].classList.toggle("background-day-gray");
  }
}

// Menu mobile
const menuHamburguer = document.querySelector("#menuHamburguer");
const navUl = document.querySelector(".nav-ul");
const header = document.querySelector(".header");
const toggle = document.querySelector(".switch");
const html = document.querySelector("html");

menuHamburguer.addEventListener("click", () => {
  navUl.classList.toggle("show");
  header.classList.toggle("show");
  menuHamburguer.classList.toggle("show");
  toggle.classList.toggle("show");
  html.classList.toggle("show");
});

// Fermer le menu mobile sans redirection
for (var i = 0; i < itemsNav.length; i++) {
  itemsNav[i].addEventListener("click", () => {
    navUl.classList.toggle("show");
    header.classList.toggle("show");
    menuHamburguer.classList.toggle("show");
    toggle.classList.toggle("show");
    html.classList.toggle("show");
  });
}

// Fonction des boutons de compétence
itemsCompetence.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const tipoItem = e.currentTarget.classList;

    // Afficher/cacher les compétences en fonction de la catégorie sélectionnée
    if (tipoItem.contains("html")) {
      itemsCompetence[0].classList.toggle("show-hab");
    }

    if (tipoItem.contains("php")) {
      itemsCompetence[1].classList.toggle("show-hab");
    }

    if (tipoItem.contains("javascript")) {
      itemsCompetence[2].classList.toggle("show-hab");
    }

    if (tipoItem.contains("css")) {
      itemsCompetence[3].classList.toggle("show-hab");
    }

    if (tipoItem.contains("figma")) {
      itemsCompetence[4].classList.toggle("show-hab");
    }
  });
});
