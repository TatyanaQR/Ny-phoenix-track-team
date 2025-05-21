document.addEventListener("DOMContentLoaded", () => {
    const quoteBox = document.getElementById("quoteBox");
    const quotes = [
        "We rise from the ashes stronger, faster, and unbreakable.",
        "Champions aren't born—they're built.",
        "Every setback fuels our comeback.",
        "One team. One fire. One goal.",
        "It’s lose. Lose. Lose. Win. Lose. Lose. Win. Lose. Win. Win. Win. WIN.",
        "Hard work is the price we pay for greatness.",
        "They counted us out—so we counted our reps.",
        "Train insane or remain the same.",
        "Where the fire in your chest meets the flames in your feet."
    ];
    let index = 0;
    setInterval(() => {
        quoteBox.textContent = quotes[index];
        index = (index + 1) % quotes.length;
    }, 5000);

    // Dropdown toggle behavior
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.getElementById("aboutDropdown");

    dropbtn.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!e.target.matches('.dropbtn')) {
            dropdownContent.style.display = "none";
        }
    });
});
