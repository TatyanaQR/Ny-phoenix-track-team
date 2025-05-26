
document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Sometimes we need to lose in order to win.",
    "Built from fire. Trained to rise. Running with purpose.",
    "It’s not just track. It’s transformation.",
    "We rise. We run. We conquer.",
    "Every lap is a lesson. Every sprint is a story.",
    "From ashes to ambition—this is our legacy."
  ];

  let quoteIndex = 0;
  const quoteBox = document.getElementById("quote-box");
  quoteBox.textContent = quotes[quoteIndex];

  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteBox.textContent = quotes[quoteIndex];
  }, 4000);
});
