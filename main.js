// Toggle menu bar for smaller screen --- uses jQuery
// to do: replace with JS
$(document).ready(function () {
  $(".toggle-menu").click(() => {
    $("nav ul").slideToggle(3000);
    $(".bar").toggleClass("cross");
  });
});

// *************** Slides Show ***************
let slideIndex = 1;
showSlides(slideIndex);

// Thumbnails Controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Next/Previous Controls
function plusSlide(n) {
  showSlides((slideIndex += n));
}

// Slides Controls along with slide selection
function showSlides(slideIdx) {
  let slides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("dot");

  if (slideIdx > slides.length) slideIndex = 1;

  if (slideIdx < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";

  for (let i = 0; i < slides.length; i++)
    dots[i].className = dots[i].className.replace(" active", "");

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
