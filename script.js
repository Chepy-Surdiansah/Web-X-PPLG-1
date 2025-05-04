// Gambar highlight (Destinasi Populer)
ScrollReveal().reveal('.highlight-logo', {
  duration: 1200,
  origin: 'bottom',
  distance: '30px',
  easing: 'ease-in-out',
  reset: false,
  mobile: false
});

// Deskripsi highlight
ScrollReveal().reveal('.highlight-description', {
  duration: 1200,
  origin: 'bottom',
  distance: '20px',
  delay: 200,
  easing: 'ease-in-out',
  reset: false,
  mobile: false
});

// Kartu destinasi populer
ScrollReveal().reveal('.card', {
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
  interval: 100,
  easing: 'ease-in-out',
  reset: false,
  mobile: false
});

// Tombol "Lihat Semua"
ScrollReveal().reveal('.button-all', {
  duration: 1000,
  origin: 'bottom',
  distance: '30px',
  delay: 300,
  easing: 'ease-in-out',
  reset: false,
  mobile: false
});

// Navigasi Scroll
const checkbox = document.getElementById('check');
  const body = document.body;

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  });