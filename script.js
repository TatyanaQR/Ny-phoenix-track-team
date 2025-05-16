
document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to the New York Phoenix Track Club";
  let i = 0;
  const speed = 100;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  document.getElementById("typewriter").innerHTML = "";
  typeWriter();
});
