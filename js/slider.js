var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  if (slideIndex + n >= 1 && slideIndex + n <= 6) {
    showSlides((slideIndex += n));
  }
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  Array.prototype.forEach.call(dots, function (dot) {
    dot.classList.remove("active");
  });

  Array.prototype.forEach.call(slides, function (slide) {
    slide.classList.remove("active");
  });

  dots[n - 1].classList.toggle("active");
  slides[n - 1].classList.add("active");
}
