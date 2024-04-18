const arrowBtn = document.querySelector(".arrow-btn");
const ipaChart = document.querySelector(".ipa-chart-container");
const ipaItems = document.querySelectorAll(".ipa-item");

ipaItems.forEach(item => {
    item.addEventListener("click", () => {console.log(item)})
});

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
