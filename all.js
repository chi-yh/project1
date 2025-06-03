document.addEventListener("DOMContentLoaded", function () {
    let largeImg = document.querySelector(".large-img img");
    let smallImgs = document.querySelectorAll(".small-img img");

    smallImgs.forEach((small) => {
    small.addEventListener("click", function () {
        const tempSrc = largeImg.src;
    largeImg.src = this.src;
        this.src = tempSrc;
    });
    });
});
