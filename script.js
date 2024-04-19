const arrowBtn = document.querySelector(".arrow-btn");
const ipaChart = document.querySelector(".ipa-chart-container");
const ipaLetters = document.querySelectorAll(".ipa-item span");

ipaLetters.forEach((letter) => {
    letter.addEventListener("click", () => {
        const audioName = letter.dataset.audio;
        var audio = new Audio(`assets/audio/${audioName}.mp3`);
        audio.play();
    });
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
