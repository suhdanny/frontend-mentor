ratingButton = document.querySelectorAll(".rate");

ratingButton.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle('active');
    })
})