// Main JavaScript functionality

// DOM Elements
const header = document.getElementById("header")
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")
const menuIcon = document.getElementById("menu-icon")
const closeIcon = document.getElementById("close-icon")
const heroContent = document.querySelector(".hero-content")
const contactForm = document.getElementById("contact-form")

// State
let isMobileMenuOpen = false

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeAnimations()
  initializeScrollEffects()
  initializeMobileMenu()
  initializeContactForm()
  initializeIntersectionObserver()
})

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
    closeMobileMenu()
  }
}

// Initialize animations
function initializeAnimations() {
  // Animate hero content on load
  setTimeout(() => {
    if (heroContent) {
      heroContent.classList.remove("opacity-0")
      heroContent.classList.add("animate-fade-in-up")
    }
  }, 300)
}

// Initialize scroll effects
function initializeScrollEffects() {
  window.addEventListener("scroll", handleScroll)
}

// Handle scroll events
function handleScroll() {
  const scrollY = window.scrollY

  // Header background change
  if (scrollY > 10) {
    header.classList.add("header-scrolled")
    header.classList.remove("bg-transparent")
  } else {
    header.classList.remove("header-scrolled")
    header.classList.add("bg-transparent")
  }
}

// Initialize mobile menu
function initializeMobileMenu() {
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu)
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen

  if (isMobileMenuOpen) {
    openMobileMenu()
  } else {
    closeMobileMenu()
  }
}

// Open mobile menu
function openMobileMenu() {
  mobileMenu.classList.remove("hidden")
  menuIcon.classList.add("hidden")
  closeIcon.classList.remove("hidden")
  isMobileMenuOpen = true
}

// Close mobile menu
function closeMobileMenu() {
  mobileMenu.classList.add("hidden")
  menuIcon.classList.remove("hidden")
  closeIcon.classList.add("hidden")
  isMobileMenuOpen = false
}

// Initialize contact form
function initializeContactForm() {
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactForm)
  }
}

// Handle contact form submission
function handleContactForm(e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    empresa: formData.get("empresa"),
    mensaje: formData.get("mensaje"),
  }

  // Simulate form submission
  console.log("Form submitted:", data)

  // Show success message
  alert("¡Gracias por tu mensaje! Te contactaremos pronto.")

  // Reset form
  contactForm.reset()
}

// Initialize Intersection Observer for animations
function initializeIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
        entry.target.classList.remove("opacity-0")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".vision-card, .mission-card, .project-card, .team-card, .contact-info, .contact-form",
  )

  animatedElements.forEach((el) => {
    observer.observe(el)
  })
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Add debounced scroll handler
const debouncedScrollHandler = debounce(handleScroll, 10)
window.addEventListener("scroll", debouncedScrollHandler)

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && isMobileMenuOpen) {
    closeMobileMenu()
  }
})
