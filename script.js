const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggleBtn.classList.toggle('rotated');
});

let currentIndex = 0;
const cards = document.querySelectorAll('.carousel .card, .carousel .card2, .carousel .card3, .carousel .card5, .carousel .card6, .carousel .card7');
const totalCards = cards.length;

function moveRight() {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - 1;
    }
    updateCarousel();
}

function moveRight() {
    if (currentIndex < totalCards - 1) { 
        currentIndex++;
        updateCarousel();
    }
}

function moveLeft() {
    if (currentIndex > 0) { 
        currentIndex--;
        updateCarousel();
    }
}

function updateButtons() {
    document.querySelector('.right-arrow').style.opacity = currentIndex === totalCards - 1 ? "0.5" : "1";
    document.querySelector('.left-arrow').style.opacity = currentIndex === 0 ? "0.5" : "1";
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const cardWidth = cards[0].offsetWidth + 20;
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateButtons();
}

AOS.init();

let scrollSpeed = 0.1; 
let damping = 0.08;

let currentScroll = window.scrollY;
let targetScroll = window.scrollY;

let isMobile = window.matchMedia("(max-width: 1440px)").matches;

if (!isMobile) {
  
  function mouseScroll(event) {
    event.preventDefault();

    let scrollAmount = window.innerHeight * scrollSpeed;
    
    if (event.deltaY > 0) {
      targetScroll += scrollAmount;
    }
    else {
      targetScroll -= scrollAmount;
    }
  }

  function smoothScroll() {
    currentScroll += (targetScroll - currentScroll) * damping;

    if (Math.abs(targetScroll - currentScroll) < 0.1) {
      currentScroll = targetScroll;
    }

    window.scrollTo(0, currentScroll);
    requestAnimationFrame(smoothScroll);
  }

  window.addEventListener("wheel", mouseScroll, { passive: false });

  smoothScroll();  
}


const boxes = document.querySelectorAll('');

const hoverSound = new Audio('zvuk/klik.mp3');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    hoverSound.currentTime = 0; 
    hoverSound.play(); 
  });
});


