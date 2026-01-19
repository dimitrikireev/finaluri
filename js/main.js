document.addEventListener('DOMContentLoaded', () => {
    // arrows - только если элементы существуют на странице
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.slide-arrow.left');
    const nextBtn = document.querySelector('.slide-arrow.right');
    
    if (slides && prevBtn && nextBtn) {
        const slideCount = document.querySelectorAll('.slide').length;
        let currentIndex = 0;

        function updateSlide() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlide();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateSlide();
        });
    }

    // burger menu
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !burger.contains(e.target)) {
                nav.classList.remove('active');
            }
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
});


// login section

// Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const forms = document.querySelectorAll('.auth-form');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    forms.forEach(f => f.classList.remove('active'));
    document.getElementById(btn.dataset.tab + '-form').classList.add('active');
  });
});

// Show / hide password
document.querySelectorAll('.toggle-password').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const input = toggle.previousElementSibling;
    if (input.type === 'password') {
      input.type = 'text';
      toggle.textContent = 'Hide';
    } else {
      input.type = 'password';
      toggle.textContent = 'Show';
    }
  });
});

// Login form validation
document.getElementById('login-form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-password').value;
  if (!/^\S+@\S+\.\S+$/.test(email)) { alert('Invalid email'); return; }
  if (pass.length < 6) { alert('Password too short'); return; }
  alert('Login successful!');
});

// Registration form validation
document.getElementById('register-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  const pass1 = document.getElementById('reg-password').value;
  const pass2 = document.getElementById('reg-password2').value;

  if (!name) { alert('Enter your name'); return; }
  if (!/^\S+@\S+\.\S+$/.test(email)) { alert('Invalid email'); return; }
  if (pass1.length < 6) { alert('Password too short'); return; }
  if (pass1 !== pass2) { alert('Passwords do not match'); return; }

  alert('Registration successful!');
});
