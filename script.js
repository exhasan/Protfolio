const words = ["Competitive Programmer", "Devoloper"];
let wordIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing-text");

function type() {
  if (charIndex < words[wordIndex].length) {
    typingElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (typingElement) type();
});
