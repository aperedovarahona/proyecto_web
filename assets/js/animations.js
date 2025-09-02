// ANIMATIONS.JS - Funcionalidad para animaciones

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animaciones al cargar la página
    initAnimations();
    
    // Configurar observador de intersección para animaciones al hacer scroll
    initScrollAnimations();
    
    // Añadir efectos de hover mejorados
    initHoverEffects();
});

// Inicializar animaciones
function initAnimations() {
    // Añadir animación de escritura al título del hero si se desea
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // heroTitle.classList.add('typewriter'); // Descomentar para efecto máquina de escribir
    }
}

// Configurar animaciones al hacer scroll (AOS - Animate On Scroll)
function initScrollAnimations() {
    // Crear observador de intersección
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Añadir clase de animación cuando el elemento es visible
                entry.target.classList.add('aos-animate');
                
                // Para elementos que deben animarse solo una vez
                if (entry.target.dataset.aosOnce !== undefined) {
                    observer.unobserve(entry.target);
                }
            } else if (entry.target.dataset.aosRepeat !== undefined) {
                // Remover clase de animación si el elemento sale de la vista y debe repetirse
                entry.target.classList.remove('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observar todos los elementos con atributo data-aos
    document.querySelectorAll('[data-aos]').forEach(function(element) {
        observer.observe(element);
    });
}

// Mejorar efectos de hover
function initHoverEffects() {
    // Efecto de tilt en tarjetas (opcional)
    const cards = document.querySelectorAll('.proyecto-card, .equipo-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            if (window.innerWidth > 768) { // Solo en escritorio
                const x = e.offsetX;
                const y = e.offsetY;
                const centerX = this.offsetWidth / 2;
                const centerY = this.offsetHeight / 2;
                
                const rotateY = (x - centerX) / 25;
                const rotateX = (centerY - y) / 25;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Función para animar contadores (si se añaden números estadísticos en el futuro)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Velocidad de la animación
    
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounters(counter, target, speed), 1);
        } else {
            counter.innerText = target;
        }
    });
}