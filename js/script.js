function init() {
    alert('it works');

    map = new Map(document.getElementById('canvas'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });

    let slides = document.getElementsByClassName("slider__slide");
    let navlinks = document.getElementsByClassName("slider__navlink");
    let currentSlide = 0;

    document.getElementById("nav-button--next").addEventListener("click", () => {
        changeSlide(currentSlide + 1)
    });
    document.getElementById("nav-button--prev").addEventListener("click", () => {
        changeSlide(currentSlide - 1)
    });

    function changeSlide(moveTo) {
        if (moveTo >= slides.length) {moveTo = 0;}
        if (moveTo < 0) {moveTo = slides.length - 1;}
        
        slides[currentSlide].classList.toggle("active");
        navlinks[currentSlide].classList.toggle("active");
        slides[moveTo].classList.toggle("active");
        navlinks[moveTo].classList.toggle("active");
        
        currentSlide = moveTo;
    }

    document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
        bullet.addEventListener('click', () => {
            if (currentSlide !== bulletIndex) {
                changeSlide(bulletIndex);
            }
        })
    })
//Javascript code comes from https://alvarotrigo.com/blog/javascript-slider-how-to-make-one/
}