const words = [
  "AI / ML Engineer",
  "Data Analyst",
  "Automation Specialist",
  "Python Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 55 : 95);
}

typeEffect();

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      item.classList.add("visible");
    }
  });
}

const skillButtons = document.querySelectorAll(".skill-button");
const skillTitle = document.getElementById("skillTitle");
const skillDescription = document.getElementById("skillDescription");

skillButtons.forEach((button) => {
  button.addEventListener("click", () => {
    skillButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    skillTitle.textContent = button.dataset.title;
    skillDescription.textContent = button.dataset.detail;
  });
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);