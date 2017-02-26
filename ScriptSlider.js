var slideIndex = 0;
carousel();


function currentSlide(n) {
  showSlides(slideIndex = n);
  clearTimeout(time);
  time = setTimeout(carousel, 3000);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function carousel() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}     
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    if(slideIndex-1 == 0)
    {
      dots[4].className = dots[4].className.replace(" active", "");
    }
    if(slideIndex-1>0)
    {
    for (i = 0; i < slideIndex-1; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    }
    time = setTimeout(carousel, 4000); // menja sliku na 4 sekunde
}