const arrowBtn = document.querySelector(".arrow-btn");
const ipaChart = document.querySelector(".ipa-chart-container");

arrowBtn.addEventListener("click", () => {
    scrolldiv();
});

function scrolldiv() {
    window.scroll({
        top: findPosition(ipaChart),
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
