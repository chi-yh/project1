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
document.addEventListener("DOMContentLoaded", function () {
    const minusBtn = document.querySelector(".minusbtn");
    const plusBtn = document.querySelector(".plusbtn");
    const qtyInput = document.querySelector(".qty-input");

    plusBtn.addEventListener("click", function () {
    let current = parseInt(qtyInput.value) || 1;
    qtyInput.value = current + 1;
    });

    minusBtn.addEventListener("click", function () {
    let current = parseInt(qtyInput.value) || 1;
    if (current > 1) {
        qtyInput.value = current - 1;
    }
    });
});