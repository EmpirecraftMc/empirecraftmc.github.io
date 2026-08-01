const brightnessToggle = document.getElementById("brightness-toggle");
const body = document.querySelector("body");
const header = document.querySelector("header");
const toggleImg = document.querySelector("nav button img");

let selectedTheme = "dark";
brightnessToggle.addEventListener("click", () => {
    if (selectedTheme === "dark") {
        selectedTheme = "light"
        body.style.backgroundColor = "whitesmoke";
        body.style.color = "#080808";
        header.style.backgroundColor = "#e2e2e2"
        toggleImg.setAttribute("src", "images/brightnesstoggledark.svg");
    } else {
        selectedTheme = "dark"
        body.style.backgroundColor = "#080808";
        body.style.color = "whitesmoke";
        header.style.backgroundColor = "#1d1d1d"
        toggleImg.setAttribute("src", "images/brightnesstogglelight.svg");
    }
})