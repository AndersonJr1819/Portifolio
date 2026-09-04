document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  const sections = document.querySelectorAll('section');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        
        if (entry.target.id === 'habilidades') {
          const bars = document.querySelectorAll('.bar-fill');
          bars.forEach(function(bar) {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth + '%';
          });
        }
      }
    });
  }, observerOptions);

  sections.forEach(function(sec) {
    observer.observe(sec);
  });

  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nomeInput = document.getElementById('nome');
      const emailInput = document.getElementById('email');
      const assuntoInput = document.getElementById('assunto');
      const mensagemInput = document.getElementById('mensagem');
      const successMsg = document.getElementById('form-success');

      let isValid = true;

      if (!nomeInput.value.trim()) {
        nomeInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        nomeInput.parentElement.classList.remove('error');
      }

      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        emailInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        emailInput.parentElement.classList.remove('error');
      }

      if (!assuntoInput.value.trim()) {
        assuntoInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        assuntoInput.parentElement.classList.remove('error');
      }

      if (!mensagemInput.value.trim()) {
        mensagemInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        mensagemInput.parentElement.classList.remove('error');
      }

      if (isValid) {
        successMsg.style.display = 'block';
        contactForm.reset();
        setTimeout(function() {
          successMsg.style.display = 'none';
        }, 5000);
      }
    });
  }

  const currentPath = window.location.hash || '#inicio';
  window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY + 150;
    sections.forEach(function(sec) {
      const secTop = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      const secId = sec.getAttribute('id');
      
      if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(secId)) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});