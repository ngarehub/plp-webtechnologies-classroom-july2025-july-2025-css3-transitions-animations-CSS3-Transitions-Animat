// Part 2: Functions, Scope, Parameters, Return Values

// Global variable
let clickCount = 0;

// Function with parameters & return
function multiplyAndLog(num1, num2) {
  let result = num1 * num2; // local variable
  console.log(`Multiplication result: ${result}`);
  return result;
}

// Example usage
multiplyAndLog(5, 3);

// DOM element references
const box = document.getElementById('animatedBox');
const animateBtn = document.getElementById('animateBtn');
const flipCardBtn = document.getElementById('flipCardBtn');
const card = document.getElementById('card');
const modal = document.getElementById('modal');
const showModalBtn = document.getElementById('showModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Part 3: JS triggers CSS animations
animateBtn.addEventListener('click', () => {
  clickCount++;
  console.log(`Animate button clicked ${clickCount} times`);

  // Toggle between normal and pulse animation
  if (clickCount % 2 === 0) {
    box.classList.remove('pulse');
    box.classList.add('animate');
  } else {
    box.classList.remove('animate');
    box.classList.add('pulse');
  }
});

flipCardBtn.addEventListener('click', () => {
  card.classList.toggle('flip');
});

// Modal show/hide logic
showModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modal.querySelector('.modal-content').style.animation = 'slideOut 0.5s forwards';
  setTimeout(() => {
    modal.style.display = 'none';
    modal.querySelector('.modal-content').style.animation = 'slideIn 0.5s forwards';
  }, 500);
});
