js/main.js
js/flipbook.js
function openBook() {
    document.getElementById("bookModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeBook() {
    document.getElementById("bookModal").style.display = "none";
    document.body.style.overflow = "auto";
}
