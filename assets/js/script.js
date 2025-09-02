// ===== SCROLL SUAVE =====
// Esto es lo que hace que al hacer click en cualquier botón o enlace,
// la página se desplace suavemente hasta la sección correspondiente.
document.querySelectorAll('[data-target]').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Método moderno con scrollIntoView y options
            const header = document.getElementById('header');
            const headerHeight = header.offsetHeight;
            
            // Calcular posición exacta
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        // Cerrar menú móvil si está abierto
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu.classList.contains('open')) {
            toggleMobileMenu();
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
