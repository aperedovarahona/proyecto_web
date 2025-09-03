// ===== SCROLL SUAVE =====
// Esto es lo que hace que al hacer click en cualquier botón o enlace,
// la página se desplace suavemente hasta la sección correspondiente.
document.querySelectorAll('[data-target]').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Evitamos que el botón haga su acción por defecto (como saltar de golpe)

    const targetId = button.getAttribute('data-target'); // Obtenemos el id de la sección a la que queremos ir
    const targetSection = document.getElementById(targetId); // Buscamos esa sección en el DOM

    if (targetSection) { // Si existe la sección, hacemos el scroll suave
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Y aquí un detalle importante: si el menú móvil está abierto, lo cerramos
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('open')) {
      toggleMobileMenu(); // Llamamos a la función que cierra el menú
    }
  });
});

// ===== MENU MÓVIL =====
// Ahora vamos a manejar el famoso "hamburger menu" para móviles
const mobileMenuBtn = document.getElementById('mobile-menu-btn'); // Botón que abre/cierra el menú
const mobileMenu = document.getElementById('mobile-menu'); // El menú en sí
const menuIcon = document.getElementById('menu-icon'); // Icono de menú (las tres rayitas)
const closeIcon = document.getElementById('close-icon'); // Icono de cerrar (la X)

mobileMenuBtn.addEventListener('click', toggleMobileMenu); // Cada vez que clickeas el botón, llamamos a la función

// Esta función se encarga de abrir o cerrar el menú
function toggleMobileMenu() {
  mobileMenu.classList.toggle('open'); // Abrimos o cerramos el menú (clase 'open')
  menuIcon.classList.toggle('hidden'); // Mostramos u ocultamos el icono de menú
  closeIcon.classList.toggle('hidden'); // Mostramos u ocultamos el icono de cerrar
}

// ===== CARRUSEL PROYECTOS =====
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const slides = Array.from(track.children);
let currentIndex = 0;

// Función para mover el carrusel
function updateCarousel() {
  const cardWidth = slides[0].getBoundingClientRect().width + 20;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 3) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 3;
  }
  updateCarousel();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoplay();
});
prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoplay();
});

// Autoplay
let autoplayInterval;
function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000);
}
function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}
startAutoplay();

// Ajuste al redimensionar ventana
window.addEventListener("resize", updateCarousel);

// ===== SCROLL SUAVE A DETALLES =====
const proyectoCards = document.querySelectorAll(".proyecto-card");
proyectoCards.forEach(card => {
  card.addEventListener("click", () => {
    const targetId = card.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: "smooth"
      });
    }
  });
});

