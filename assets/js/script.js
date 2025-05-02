// 3D Tilt & Interaction
gsap.utils.toArray('.testimonial-card').forEach(card => {
  const tl = gsap.timeline({ paused: true });

  tl.to(card, {
    rotationX: 10,
    scale: 1.05,
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
    duration: 0.3
  });

  card.addEventListener('mouseenter', () => tl.play());
  card.addEventListener('mouseleave', () => tl.reverse());
});

// Hover Zoom & Overlay Effect
gsap.utils.toArray('.work-item').forEach(item => {
  const overlay = item.querySelector('.work-overlay');
  const img = item.querySelector('img');

  const enterAnimation = gsap.timeline({ paused: true });
  enterAnimation
    .to(img, { scale: 1.1, duration: 0.5 })
    .to(overlay, {
      opacity: 1,
      y: 0,
      duration: 0.3
    }, "-=0.3");

  item.addEventListener('mouseenter', () => enterAnimation.play());
  item.addEventListener('mouseleave', () => enterAnimation.reverse());
});

// Auto Scroll & Infinite Marquee
gsap.to('.client-logos', {
  x: '-50%',  // Geser setengah lebar container
  ease: 'linear',
  repeat: -1, // Infinite loop
  duration: 10 // Durasi scroll
});

// Hover Pause Effect
const clientLogos = document.querySelector('.client-logos');
clientLogos.addEventListener('mouseenter', () => {
  gsap.pauseAll();
});
clientLogos.addEventListener('mouseleave', () => {
  gsap.resumeAll();
});

// Reveal Animations
gsap.registerPlugin(ScrollTrigger);

const sections = [
  '#quick-about',
  '#recent-work',
  '#testimonials',
  '#clients'
];

sections.forEach(sectionId => {
  gsap.from(sectionId, {
    scrollTrigger: {
      trigger: sectionId,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });
});

// Smooth Theme Transition
function toggleTheme() {
  document.documentElement.classList.add('theme-transition');

  if (document.documentElement.getAttribute('data-theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // Remove transition class after animation
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transition');
  }, 500);
}

// Custom Cursor Effect
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2
  });
});