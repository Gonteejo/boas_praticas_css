document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll(".produto").forEach(elem => {
        elem.addEventListener("mouseover", () => {
            elem.classList.add("produto--destaque");
        })
        elem.addEventListener("mouseout", () => {
            elem.classList.remove("produto--destaque");
        })
    });
});