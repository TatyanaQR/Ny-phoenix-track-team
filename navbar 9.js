
document.addEventListener("DOMContentLoaded", function () {
    const aboutButton = document.querySelector(".dropdown > a");
    const dropdownMenu = document.querySelector(".dropdown-content");

    // Toggle dropdown visibility on click
    aboutButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent anchor jump
        dropdownMenu.classList.toggle("show-dropdown");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            dropdownMenu.classList.remove("show-dropdown");
        }
    });
});
