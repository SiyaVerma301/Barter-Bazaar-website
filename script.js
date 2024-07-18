const button = document.getElementById(product - btn);
button.addEventListener("click", function () {
    const targetSection = document.getElementById(product - items);
    targetSection.scrollIntoView({ behavior: "smooth" });
});
