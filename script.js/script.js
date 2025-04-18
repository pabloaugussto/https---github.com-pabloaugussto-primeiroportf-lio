// script.js
// Ativa scroll suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Modal slideshow
let slideIndex = 0;

const slides = document.querySelectorAll(".modal .slide");
const modal = document.getElementById("modal-slideshow");
const trigger = document.querySelector(".projeto-slideshow-trigger");

if (trigger) {
  trigger.addEventListener("click", () => {
    console.log("Card clicado: abrindo modal.");
    modal.style.display = "flex";
    mostrarSlide(slideIndex);
  });
} else {
  console.warn("⚠️ Classe .projeto-slideshow-trigger não encontrada!");
}

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("ativo");
    if (i === index) slide.classList.add("ativo");
  });
}

function mudarSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  mostrarSlide(slideIndex);
}

function fecharModal() {
  modal.style.display = "none";
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    fecharModal();
  }
});

// Fechar modal ao clicar no "X"
const btnFechar = document.getElementById("fechar");
if (btnFechar) {
  btnFechar.addEventListener("click", fecharModal);
}

// Pega o botão de alternância
const themeToggle = document.getElementById("theme-toggle");

// Verifica se o dark mode está ativado no localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
}

// Adiciona o evento de clique ao botão de alternância
themeToggle.addEventListener("click", () => {
  // Alterna a classe 'dark-mode' no body
  document.body.classList.toggle("dark-mode");

  // Salva a preferência do usuário no localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});

