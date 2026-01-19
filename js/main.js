document.addEventListener('DOMContentLoaded', () => {

  /* SLIDER  */
  const slides = document.querySelector('.slides');
  const prevBtn = document.querySelector('.slide-arrow.left');
  const nextBtn = document.querySelector('.slide-arrow.right');

  if (slides && prevBtn && nextBtn) {
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    const updateSlide = () => {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlide();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateSlide();
    });
  }

  /*  BURGER  */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', e => {
      e.stopPropagation();
      nav.classList.toggle('active');
    });

    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
      }
    });

    nav.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => nav.classList.remove('active'))
    );
  }

  /* AUTH TABS */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const forms = document.querySelectorAll('.auth-form');

  if (tabButtons.length && forms.length) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        forms.forEach(f => f.classList.remove('active'));
        document.getElementById(btn.dataset.tab + '-form')?.classList.add('active');
      });
    });
  }

  /* PASSWORD TOGGLE */
  document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const input = toggle.previousElementSibling;
      if (!input) return;
      input.type = input.type === 'password' ? 'text' : 'password';
      toggle.textContent = input.type === 'password' ? 'Show' : 'Hide';
    });
  });

  /* LOGIN */
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const pass = document.getElementById('login-password').value;

      if (!/^\S+@\S+\.\S+$/.test(email)) return alert('Invalid email');
      if (pass.length < 6) return alert('Password too short');

      alert('Login successful!');
    });
  }

  /* REGISTER */
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const pass1 = document.getElementById('reg-password').value;
      const pass2 = document.getElementById('reg-password2').value;

      if (!name) return alert('Enter name');
      if (!/^\S+@\S+\.\S+$/.test(email)) return alert('Invalid email');
      if (pass1.length < 6) return alert('Password too short');
      if (pass1 !== pass2) return alert('Passwords do not match');

      alert('Registration successful!');
    });
  }

  /*  COOKIES  */
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookies = document.getElementById('acceptCookies');

  if (cookieBanner && acceptCookies) {
    if (localStorage.getItem('cookiesAccepted')) {
      cookieBanner.style.display = 'none';
    }

    acceptCookies.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
  }

  /* HEADER SCROLL */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  /* SCROLL TO TOP */
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
