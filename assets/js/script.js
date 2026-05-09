// assets/js/script.js

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  const triggerBottom =
    window.innerHeight * 0.90;

  reveals.forEach((element) => {

    const rect =
      element.getBoundingClientRect();

    if (rect.top < triggerBottom) {

      element.classList.add("active");
    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

window.addEventListener(
  "load",
  revealOnScroll
);