var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for(i = 0; i < x.length; i++)x[i].style.display = "none";
    myIndex++;
    if (myIndex > x.length) myIndex = 1;
    x[myIndex - 1].style.display = "block";
    for(i = 0; i < x.length; i++)dots[i].className = dots[i].className.replace(" active", "");
    dots[myIndex - 1].className += " active";
    setTimeout(carousel, 4000); // Change image every 2
    seconds;
}
showSlides(myIndex);
//Next/previous controls 
function plusSlides(n1) {
    showSlides(myIndex += n1);
}
// Thumbnail image controls function currentSlide(n) {
showSlides(myIndex = n);
function showSlides(n1) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n1 > slides.length) myIndex = 1;
    if (n1 < 1) myIndex = slides.length;
    for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
    for(i = 0; i < dots.length; i++)dots[i].className = dots[i].className.replace(" active", "");
    slides[myIndex - 1].style.display = "block";
    dots[myIndex - 1].className += " active";
}

//# sourceMappingURL=home-class.2bac62cc.js.map
