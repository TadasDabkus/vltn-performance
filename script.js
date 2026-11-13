/* =========================
   NAVIGATION
========================= */

const nav = document.querySelector(".site-header nav");
const menuButton = document.querySelector(".menu");

menuButton?.addEventListener("click", () => {
  nav?.classList.toggle("mobile-open");
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav?.classList.remove("mobile-open");
  });
});


/* =========================
   SCROLL PROGRESS
========================= */

const progress = document.querySelector(".scroll-progress");

function updateScrollProgress() {

  const scrollTop = window.scrollY;

  const height =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const percentage =
    height > 0
      ? (scrollTop / height) * 100
      : 0;

  if (progress) {
    progress.style.width = `${percentage}%`;
  }
}

window.addEventListener(
  "scroll",
  updateScrollProgress,
  { passive: true }
);

updateScrollProgress();


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {

  window.addEventListener("pointermove", event => {

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;

  });

}


/* =========================
   SCROLL REVEALS
========================= */

const revealElements =
  document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

  revealElements.forEach((element, index) => {

    element.style.transitionDelay =
      `${Math.min(index % 4, 3) * 90}ms`;

    observer.observe(element);

  });

} else {

  revealElements.forEach(element => {
    element.classList.add("is-visible");
  });

}


/* =========================
   HERO PARALLAX
========================= */

const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");

if (
  hero &&
  heroBg &&
  window.matchMedia("(pointer: fine)").matches
) {

  hero.addEventListener("pointermove", event => {

    const rect = hero.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
      rect.height -
      0.5;

    heroBg.style.transform = `
      scale(1.015)
      translate(${x * -8}px, ${y * -5}px)
    `;

  });

  hero.addEventListener("pointerleave", () => {

    heroBg.style.transform =
      "scale(1.001) translate(0,0)";

  });

}


/* =========================
   BUTTON MICRO INTERACTION
========================= */

document
  .querySelectorAll(".btn, .text-btn")
  .forEach(button => {

    button.addEventListener("mouseenter", () => {
      button.style.setProperty(
        "--button-hover",
        "1"
      );
    });

  });


/* =========================
   PRODUCT IMAGE PARALLAX
========================= */

document
  .querySelectorAll(".product")
  .forEach(product => {

    const image =
      product.querySelector("img");

    if (!image) return;

    product.addEventListener("pointermove", event => {

      const rect =
        product.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width -
        0.5;

      const y =
        (event.clientY - rect.top) /
        rect.height -
        0.5;

      image.style.transform = `
        scale(1.045)
        translate(${x * 5}px, ${y * 5}px)
      `;

    });

    product.addEventListener("pointerleave", () => {

      image.style.transform =
        "scale(1) translate(0,0)";

    });

  });


/* =========================
   CAMPAIGN IMAGE PARALLAX
========================= */

const campaign =
  document.querySelector(".campaign");

const campaignImage =
  document.querySelector(".campaign-image img");

if (
  campaign &&
  campaignImage &&
  window.matchMedia("(pointer: fine)").matches
) {

  campaign.addEventListener("pointermove", event => {

    const rect =
      campaign.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
      rect.height -
      0.5;

    campaignImage.style.transform = `
      scale(1.025)
      translate(${x * 4}px, ${y * 4}px)
    `;

  });

  campaign.addEventListener("pointerleave", () => {

    campaignImage.style.transform =
      "scale(1) translate(0,0)";

  });

}


/* =========================
   SMOOTH ANCHOR SCROLL
========================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener("click", event => {

      const id =
        link.getAttribute("href");

      if (!id || id === "#") return;

      const target =
        document.querySelector(id);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });
