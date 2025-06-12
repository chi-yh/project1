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
    const toggleBtn = document.querySelector('.nav-search');
    const searchContainer = document.querySelector('.search-container');
    const inputBox = document.querySelector('.search-input');
    toggleBtn.addEventListener('click', function () {
    searchContainer.classList.toggle('show');
    inputBox.focus(); 
    });

    const hb = document.querySelector(".hb");
    const menu = document.getElementById("mobileMenu");
    const barIcon = hb.querySelector('.bar-icon');
    const closeIcon = hb.querySelector('.close-hb');

    barIcon.addEventListener('click',()=>{
        menu.classList.remove("hidden");
        barIcon.classList.add("hidden");
        closeIcon.style.display = 'block'
    },false);

    closeIcon.addEventListener('click',()=>{
        menu.classList.add("hidden");
        barIcon.classList.remove("hidden");
        closeIcon.style.display = 'none';
    },false);
