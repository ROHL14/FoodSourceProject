document.addEventListener("DOMContentLoaded", function(event) {
  window.addEventListener("load", function(e) {
    document.body.style.display = "block";

    var tl = new TimelineMax();

    tl.staggerFrom(
      "section",
      2,
      {
        opacity: 0,
        scale: 0.5,
        ease: Power2.easeOut
      },
      0.2
    );

    tl.staggerFrom(
      "h1, h2",
      0.5,
      {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
      },
      0.2,
      "-=2"
    );

    tl.staggerFrom(
      ".anim-panel",
      1,
      {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
      },
      0.2,
      "-=1.5"
    );
  });
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  console.log(navLinks);

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 1s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
