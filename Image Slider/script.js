let currentSlide = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function showSlide(index){
    if(index >= totalSlides){
        currentSlide = 0;
    } else if(index < 0 ){
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
}

function next(){
    showSlide(currentSlide + 1);
    updatePosition();
}

function previous(){
    showSlide(currentSlide - 1);
    updatePosition();
}

function updatePosition(){
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;

}
updatePosition();

