
// Typing Effect
document.addEventListener("DOMContentLoaded", () => {
  const typedTextSpan = document.getElementById("typed-text");
  const text = "Where Dedication Meets Destiny";
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      typedTextSpan.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    }
  }

  // Start typing effect after 1 second
  setTimeout(type, 1000);

  // Rotating Quotes
  const quotes = [
    '"Built from fire. Trained to rise. Running with purpose."',
    '"It’s not just track. It’s transformation."',
    '"Every lap is a lesson. Every sprint is a story."',
    '"We rise. We run. We conquer."'
  ];
  let quoteIndex = 0;
  const quoteBox = document.getElementById("quote-box");

  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteBox.textContent = quotes[quoteIndex];
  }, 4000);
});
