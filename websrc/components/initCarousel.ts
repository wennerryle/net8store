import Splide from "@splidejs/splide";

export function initCarousel() {
  const carousel = document.querySelector<HTMLElement>('.splide');

  if (!carousel) {
    console.log("INFO: carousel not found.")
    return;
  }

  new Splide(carousel, {
    cover: true,
    heightRatio: 0.5,
    autoplay: true,
    pauseOnHover: true,
    interval: 2000,
    resetProgress: true,
  }).mount();
}