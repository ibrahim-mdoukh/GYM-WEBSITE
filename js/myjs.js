// search//////////////////////////////////////////////////////////////////////
var btnSer = document.getElementById("btnSer");
var icone = document.getElementById("icone");
let ser = document.getElementById("ser");

btnSer.onclick = function () {
    if (icone.classList.contains("bi-search")) {
        icone.classList.remove("bi-search");
        icone.classList.add("bi-x-square");
        ser.classList.add("active");
    } else if (icone.classList.contains("bi-x-square")) {
        icone.classList.add("bi-search");
        icone.classList.remove("bi-x-square");
        ser.classList.remove("active");
    }
}
/////////////////////////////////////////////////////////////////////////////
// header
let list = document.getElementById("list");
let asid = document.getElementById("asid");
let closeSide = document.getElementById("closeSide");
list.onclick = function () {
    asid.style.left = "0"
}
closeSide.onclick = function () {
    asid.style.left = "-250px"
}
// swiper/////////////////////////////////////////////////////////////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 2,
    spaceBetween: 28,
    slidesPerGroup: 2,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 499px
        992: {
            slidesPerView: 4,
            spaceBetweenSlides: 30,
            slidesPerGroup: 4,
        },
    }
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    loopFillGroupWithBlank: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },

});
// wow///////////////////////////////////////////////////////////////////////////
new WOW().init();


let art = document.getElementById("art")
let container = document.getElementById("container");
let fullWidth = window.innerWidth;
let wid = String((fullWidth - container.offsetWidth + 15) / 2) + "px";
art.style.marginLeft = `${wid}`;
art.style.paddingRight = `${wid}`;
window.onresize = function () {
    let fullWidth = window.innerWidth;
    let wid = String((fullWidth - container.offsetWidth + 15) / 2) + "px";
    art.style.marginLeft = `${wid}`;
    art.style.paddingRight = `${wid}`;
}


// number//////////////////////////////////////////////////////////////////////////
let nums = document.querySelectorAll(".num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
