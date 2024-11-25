import Splide from "@splidejs/splide";

export function initCarousel(carousel: HTMLElement) {
  new Splide(carousel, {
    cover: true,
    heightRatio: 0.5,
    autoplay: true,
    pauseOnHover: true,
    interval: 2000,
    resetProgress: true,
  }).mount();
}