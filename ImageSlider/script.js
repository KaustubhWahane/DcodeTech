let slider = document.getElementById('slider');
let currentIndex = 0;
function showSlide(index){
    let slideWidth = document.querySelector('.slide').offsetWidth;
    slider.style.transform = `translateX(-${index * slideWidth}`;
}
function nextSlide(){
    currentIndex - (currentIndex + 1) % document.querySelectorAll('.slide').length;
    showSlide(currentIndex);
}
function prevSlide(){
    currentIndex - (currentIndex - 1) % document.querySelectorAll('.slide').length % document.querySelectorAll('.slide').length;
    showSlide(currentIndex);
}