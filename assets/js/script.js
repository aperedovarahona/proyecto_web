// Funcionalidad para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
  // SOLUCIÓN: Hacer visible todo el contenido inmediatamente
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '1';
    section.style.visibility = 'visible';
  });
  
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    mobileMenuBtn.classList.toggle('active');
  });
  
  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.nav-mobile button');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      mobileMenuBtn.classList.remove('active');
    });
  });
  
  // Navegación suave para todos los botones con data-target
  const navButtons = document.querySelectorAll('[data-target]');
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header con efecto de scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Cargar imágenes con efecto de fade in
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });
    }
  });
  
  // Carrusel de proyectos
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselItems = document.querySelectorAll('.proyecto-card');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  
  if (carouselTrack && carouselItems.length > 0) {
    let currentIndex = 0;
    const itemWidth = carouselItems[0].offsetWidth + 20; // Ancho + margen
    
    // Función para actualizar el carrusel
    function updateCarousel() {
      carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    
    // Event listeners para los botones
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        if (currentIndex < carouselItems.length - 3) {
          currentIndex++;
          updateCarousel();
        }
      });
    }
    
    // Ajustar en resize
    window.addEventListener('resize', function() {
      itemWidth = carouselItems[0].offsetWidth + 20;
      updateCarousel();
    });
  }
  
  // Animación de elementos al hacer scroll
  const animatedElements = document.querySelectorAll('.section-animate');
  
  function checkScroll() {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85) {
        element.classList.add('section-visible');
      }
    });
  }
  
  // Verificar scroll al cargar y al hacer scroll
  window.addEventListener('load', checkScroll);
  window.addEventListener('scroll', checkScroll);
  
  // SOLUCIÓN: Inicializar elementos con animación pero visibles
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-animate');
    section.style.opacity = '1'; // Asegurar visibilidad
  });
  
  // Formulario de contacto
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Aquí iría la lógica para enviar el formulario
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
      contactForm.reset();
    });
  }
  
  // Detectar la sección activa en el scroll
  const sections = document.querySelectorAll('section[id]');
  const navButtonsAll = document.querySelectorAll('nav button, .footer-nav a');
  
  function setActiveSection() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const headerHeight = document.getElementById('header').offsetHeight;
      
      if (window.scrollY >= sectionTop - headerHeight - 50 && 
          window.scrollY < sectionTop + sectionHeight - headerHeight - 50) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navButtonsAll.forEach(button => {
      button.classList.remove('active');
      if (button.getAttribute('data-target') === currentSection) {
        button.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', setActiveSection);
});