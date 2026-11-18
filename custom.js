// Aos init

AOS.init({ duration: 1000, once: true });
// menu
const ham = document.getElementById("ham");
const nav = document.getElementById("nav");
const icon = ham.querySelector("i");
ham.onClick = () => {
    nav.classList.toggle('show');
    if (nav.classList.contains('show')) {
        icon.classList.remove("bx-menu");
        icon.classList.add("bx-x")
    } else {
        icon.classList.add("bx-menu");
        icon.classList.remove("bx-x")
    }
}


// progress animation

document.querySelectorAll(".fill").forEach(bar => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
        bar.style.width = width + "%";
    }, 400);
});

// swiper

new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});