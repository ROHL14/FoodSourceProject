const carouselSlide = document.querySelector(".carousel-slide");
const carouselImg = document.querySelectorAll(".carousel-slide div");

//Buttons
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

//Counter
let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//Button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImg.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImg[counter].id === "last-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImg.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImg[counter].id === "first-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImg.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
