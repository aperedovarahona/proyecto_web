// Animaciones avanzadas con Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  // SOLUCIÓN: Primero hacer visible todo el contenido
  document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '1'; // Hacer visible inmediatamente
  });
  
  // Configuración del Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  // Callback para el observer
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // SOLUCIÓN: Solo aplicar transformaciones, no cambiar opacidad
        entry.target.classList.add('aos-animate');
        
        // Opcional: dejar de observar después de la animación
        // observer.unobserve(entry.target);
      } else {
        // SOLUCIÓN: Mantener visible al salir de la vista
        // No remover la clase aos-animate para mantener la posición final
      }
    });
  };
  
  // Crear el observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  // Observar elementos con data-aos
  const animatedElements = document.querySelectorAll('[data-aos]');
  animatedElements.forEach(el => {
    // SOLUCIÓN: Inicializar como visibles pero en posición inicial
    el.style.opacity = '1';
    
    // Aplicar transformación inicial según el tipo de animación
    const aosType = el.getAttribute('data-aos');
    switch(aosType) {
      case 'fade-up':
        el.style.transform = 'translateY(30px)';
        break;
      case 'fade-down':
        el.style.transform = 'translateY(-30px)';
        break;
      case 'fade-left':
        el.style.transform = 'translateX(30px)';
        break;
      case 'fade-right':
        el.style.transform = 'translateX(-30px)';
        break;
      case 'zoom-in':
        el.style.transform = 'scale(0.9)';
        break;
      case 'zoom-out':
        el.style.transform = 'scale(1.1)';
        break;
    }
    
    observer.observe(el);
  });
  
  // Efecto parallax para el hero
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      hero.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    });
  }
  
  // Animación de escritura para títulos (opcional)
  const animateText = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    
    typeWriter();
  };
  
  // Aplicar animación de escritura al título principal si existe
  const mainTitle = document.querySelector('.hero-title');
  if (mainTitle) {
    const originalText = mainTitle.textContent;
    animateText(mainTitle, originalText, 150);
  }
  
  // Animación de contador para estadísticas (si las hay)
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute('data-target');
          const count = +entry.target.innerText;
          const increment = target / 100;
          
          if (count < target) {
            entry.target.innerText = Math.ceil(count + increment);
            setTimeout(() => {
              counterObserver.observe(entry.target);
            }, 20);
          } else {
            entry.target.innerText = target;
          }
        }
      });
    }, observerOptions);
    
    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }
  
  // Efecto de hover 3D para tarjetas de equipo
  const teamCards = document.querySelectorAll('.equipo-card');
  teamCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleY = (x - centerX) / 25;
      const angleX = (centerY - y) / 25;
      
      this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
  
  // Efecto de partículas para el fondo del hero (opcional)
  function createParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const particlesCount = 30;
    
    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Posición aleatoria
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Tamaño aleatorio
      const size = Math.random() * 4 + 1;
      
      // Duración aleatoria
      const duration = Math.random() * 10 + 5;
      
      // Estilo de la partícula
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDuration = `${duration}s`;
      
      heroSection.appendChild(particle);
    }
  }
  
  // Llamar a la función de partículas
  createParticles();
});