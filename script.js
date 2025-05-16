
document.addEventListener("DOMContentLoaded", () => {
  const text = "Welcome to the New York Phoenix Track Club";
  const typingText = document.querySelector(".typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  if (typingText) {
    typingText.textContent = "";
    type();
  }
});
