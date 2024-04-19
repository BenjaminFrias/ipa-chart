const arrowBtn = document.querySelector(".arrow-btn");
const ipaChart = document.querySelector(".ipa-chart-container");
const ipaLetters = document.querySelectorAll(".ipa-item span");
const hamMenu = document.querySelector(".ham-menu");
const nav = document.querySelector("header nav");
const closeBtn = document.querySelector(".close-btn");
const navLinks = nav.querySelectorAll("ul li a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (nav.classList.contains("active")) {
            nav.classList.toggle("active");
        }
    });
});

closeBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

hamMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

arrowBtn.addEventListener("click", () => {
    scrolldiv(ipaChart);
});

function scrolldiv(div) {
    window.scroll({
        top: findPosition(div) - 50,
        behavior: "smooth",
    });
}

function findPosition(obj) {
    var currentTop = 0;
    if (obj.offsetParent) {
        do {
            currentTop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currentTop];
    }
}

ipaLetters.forEach((letter) => {
    letter.addEventListener("click", () => {
        const audioName = letter.dataset.audio;
        var audio = new Audio(`assets/audio/${audioName}.mp3`);
        audio.play();
    });
});
